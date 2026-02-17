using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Coach
    {
        [Required]
        public int? CoachID { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public string? FullName { get; set; } = $"{FirstName} {MiddleName} {LastName} {Suffix}";

        [Required]
        public string? ContactNumber { get; set; }
        [Required]
        public static string? FirstName { get; set; }
        [Required]
        public static string? MiddleName { get; set; }
        [Required]
        public static string? LastName { get; set; }
        [Required]
        public static string? Suffix { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public string? EducationalAttainment { get; set; }

        public string? ProfileImageUrl { get; set; }
        [Required]
        public string? Occupation { get; set; }
      
        public List<string?>? OtherSports { get; set; }
        [Required]
        public string? Role { get; set; }
        [Required]
        public DateTime DateRegistered { get; set; }
        [Required]
        public Team? TeamAssigned { get; set; }

    }
}
