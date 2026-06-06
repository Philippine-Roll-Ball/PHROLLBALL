namespace server.Models
{
    public class BulkGallery
    {
        public List<IFormFile> Files { get; set; } = new List<IFormFile>();

        public string? UploadedBy { get; set; }


    }
}
