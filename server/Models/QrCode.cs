using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace server.Models
{
    public class QrCode
    {
        [Key]
        [JsonPropertyName("securityToken")]
        public string? SecurityToken { get; set; }

        [JsonPropertyName("entityType")]
        public string? EntityType { get; set; }
        [JsonPropertyName("data")]
        public string? Data { get; set; }
        
        [JsonPropertyName("createdBy")]
        public string? CreatedByEmail { get; set; }
    }
}
