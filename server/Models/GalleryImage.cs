using Google.Cloud.Firestore;

namespace server.Models
{
    [FirestoreData]
    public class GalleryImage
    {

        [FirestoreDocumentId]
        public string Id { get; set; }

        public IFormFile File { get; set; }

        [FirestoreProperty("image_url")]
        public string? ImageUrl { get; set; }

        /**
         * StoragePath
         * Filename
         * UploadedBy
         * UploadDate
         * Width
         * Height
         * Tags
        **/
        [FirestoreProperty("storage_path")]
        public string? StoragePath { get; set; }

        [FirestoreProperty("filename")]
        public string? FileName { get; set; }

        [FirestoreProperty("uploaded_by")]
        public string? UploadedBy { get; set; }

        [FirestoreProperty("upload_date")]
        public DateTime? UploadDate { get; set; }

        [FirestoreProperty("width")]
        public int? Width { get; set; }
        [FirestoreProperty("height")]
        public int? Height { get; set; }

        [FirestoreProperty("tags")]
        public List<string>? Tags { get; set; } = new List<string>();


    }
}
