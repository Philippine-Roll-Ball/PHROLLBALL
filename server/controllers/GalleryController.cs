using Google.Cloud.Firestore;
using Google.Cloud.Storage.V1;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GalleryController : ControllerBase
    {

        private readonly FirestoreDb _firestoreDb;
        private readonly StorageClient _storageClient;
        private readonly string _bucketName = "prbf-895e5.firebasestorage.app";
        public GalleryController(FirestoreDb firestoreDb, StorageClient storageClient)
        {
            _firestoreDb = firestoreDb;
            _storageClient = storageClient;
        }

        [HttpGet("a")]
        public async Task<IActionResult> GetGalleryImages()
        {
            Console.WriteLine("Called");
            var collection = _firestoreDb.Collection("gallery_images");
            var snapshot = await collection.GetSnapshotAsync();
            var images = snapshot.Documents.Select(doc => new
            {
                Id = doc.Id,
                ImageUrl = doc.GetValue<string>("image_url"),
                UploadedBy = doc.GetValue<string>("uploaded_by"),
                UploadedAt = doc.GetValue<Timestamp>("uploaded_at").ToDateTime(),
                ByteSize = doc.GetValue<long>("byte_size"),
                MimeType = doc.GetValue<string>("mime_type")
            }).ToList();
            return Ok(images);
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadGalleryImage([FromForm] BulkGallery galleryUploadRequest)
        {
            if(galleryUploadRequest.Files == null || galleryUploadRequest.Files.Count == 0)
            {
                return BadRequest("No file uploaded. ");
            }
            var uploadResults = new List<object>();
            var collecton = _firestoreDb.Collection("gallery_images");

            try
            {
                foreach (var file in galleryUploadRequest.Files)
                {
                    if (file.Length == 0) continue;

                    string fileExtension = Path.GetExtension(file.FileName);
                    string uniqueFileName = $"{Guid.NewGuid()}{fileExtension}";
                    string storagePath = $"gallery/{uniqueFileName}";

                    using var stream = file.OpenReadStream();
                    await _storageClient.UploadObjectAsync(
                        bucket: _bucketName,
                        objectName: storagePath,
                        contentType: file.ContentType,
                        source: stream
                        );
                    string encodedName = Uri.EscapeDataString(uniqueFileName);
                    string publicUrl = $"https://firebasestorage.googleapis.com/v0/b/{_bucketName}/o/{encodedName}?alt=media";

                    var docData = new Dictionary<string, object>
                    {
                        { "image_url", publicUrl},
                        { "storage_path", storagePath },
                        { "uploaded_by", galleryUploadRequest.UploadedBy ?? "guest" },
                        { "uploaded_at", Timestamp.GetCurrentTimestamp() },
                        { "byte_size", file.Length },
                        { "mime_type", file.ContentType }
                    };

                    var docRef = await collecton.AddAsync(docData);

                    uploadResults.Add(new
                    {
                        OriginalFileName = file.FileName,
                        DocumentId = docRef.Id,
                        Url = publicUrl
                    });
                }
                return Ok(new
                {
                    Message = $"Successfully Uploaded {uploadResults.Count} image(s)",
                    Results = uploadResults
                });

            }

            catch (Exception ex)
            {
                return StatusCode(500, "An error occured while uploading the image. " + ex.Message);
            }
                
        }
    }
}
