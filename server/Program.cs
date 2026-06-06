using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

using FirebaseAdmin;
using Google.Cloud.Firestore;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
using server.Data;
using System.Text;
using System.Security.Claims;
using server.Services;

var builder = WebApplication.CreateBuilder(args);


string? firebaseJson = builder.Configuration["Firebase:AdminKeyPath"];
// Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", firebaseJson);

builder.Services.AddSqlServer<AppDbContext>(
    builder.Configuration.GetConnectionString("DefaultConnection"),
    sqlServerOptions => sqlServerOptions.EnableRetryOnFailure()
);

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

app.MapControllers();
app.MapGet("/", () => "PRBF API Is Running!");
app.Run();