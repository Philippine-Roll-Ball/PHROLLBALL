using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class News { 
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(128)]
    public string Headline { get; set; } = string.Empty;

    [Required]
    [MaxLength(9999)]
    public string Body { get; set; } = string.Empty;

    [Required]
    public DateTime CreatedAt { get; set; }
    
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}