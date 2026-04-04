using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class UserDto
    {
        [Required]
        [EmailAddress]
        [MaxLength(50)]
        public string? Email { get; set; }

        [Required]
        [MaxLength(32)]
        public string? Password { get; set; }

        [Required]
        [MaxLength(11)]
        public string?  ContactNumber { get; set; }

        [Required]
        [MaxLength(50)]
        public string? FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string?  MiddleName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? LastName { get; set; }

        [MaxLength(5)]
        public string? Suffix { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Address { get; set; }

        [Required]
        [MaxLength(6)]
        public string?  Sex { get; set; }

        [Required]
        [MaxLength(30)]
        public string? EducationalAttainment { get; set; }

        [MaxLength(255)]
        public string? ProfileImageUrl { get; set; }

        [MaxLength(15)]
        [Required]
        public string? Nationality { get; set; }

        [Required]
        [MaxLength(30)]
        public string? Occupation { get; set; }

        [Required]
        [MaxLength(10)]
        public string? Role { get; set; }


    }
}
