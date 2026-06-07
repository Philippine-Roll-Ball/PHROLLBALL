using System.Security.Claims;
using System.Text;
using FirebaseAdmin;
using Google;
using System.Threading.RateLimiting;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Google.Cloud.Storage.V1;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using server.Data;
using server.Services;
using Microsoft.AspNetCore.RateLimiting;

var builder = WebApplication.CreateBuilder(args);


string? firebaseJson = builder.Configuration["Firebase:AdminKeyPath"];
// Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", firebaseJson);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        sqlServerOptions =>
        {
            sqlServerOptions.EnableRetryOnFailure(
                maxRetryCount: 5, 
                maxRetryDelay: TimeSpan.FromSeconds(10),
                errorNumbersToAdd: null);
            sqlServerOptions.CommandTimeout(60);
        }));

// Rate Limiter
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("HealthCheckLimit", opt =>
    {
        opt.PermitLimit = 5;
        opt.Window = TimeSpan.FromMinutes(1);
        opt.QueueLimit = 0;
    });
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});



GoogleCredential credential;

if(!string.IsNullOrEmpty(firebaseJson) && firebaseJson.Trim().StartsWith("{"))
{
    credential = GoogleCredential.FromJson(firebaseJson);
}
else 
{
    // Fallback for local development if you are using a path to a file
    string? credentialPath = builder.Configuration["Firebase:AdminKeyPath"];
    credential = GoogleCredential.FromFile(credentialPath);
}

if(FirebaseApp.DefaultInstance == null)
{
    var firebaseApp = FirebaseApp.Create(new AppOptions
    {
        Credential = credential
    });

    builder.Services.AddSingleton(firebaseApp);
}
else
{
    builder.Services.AddSingleton(FirebaseApp.DefaultInstance);
}

var firebaseProjectId = builder.Configuration["Firebase:ProjectId"];

builder.Services.AddSingleton<FirestoreDb>(provider =>
{
    var firestoreBuilder = new FirestoreDbBuilder
    {
        ProjectId = firebaseProjectId,
        Credential = credential
    };
    return firestoreBuilder.Build();
});

builder.Services.AddSingleton<StorageClient>(provider =>
{
    return StorageClient.Create(credential);
});



    builder.Services.AddScoped<AuthenticationService>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = $"https://securetoken.google.com/{firebaseProjectId}";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),


            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],

            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],

            ValidateLifetime = true,
            RoleClaimType = ClaimTypes.Role

        };
    });

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//check if the environment is development, if so, allow CORS for localhost:8080 (where the React app is running)

builder.Services.AddCors(options =>
{
    options.AddPolicy("PrbfPolicy", policy =>
    {
        policy.WithOrigins(
                "http://localhost:8080",      // Local Development
                "http://localhost:5173",      // Standard Vite Port (just in case)
                "https://phrollball.vercel.app" // Production Frontend
              )
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

    app.UseSwagger();
    app.UseSwaggerUI();



//app.UseHttpsRedirection();

app.UseCors("PrbfPolicy");

app.UseAuthentication();
app.UseAuthorization();
app.UseRateLimiter();

app.MapControllers();
app.MapGet("/health", async (HttpRequest request, AppDbContext db) =>
{
    bool isConnected = await db.Database.CanConnectAsync();
    return isConnected ? Results.Ok("Awake") : Results.StatusCode(503);
}).RequireRateLimiting("HealthCheckLimit");
app.Run();