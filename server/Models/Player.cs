using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Player
    {
        [Required]
        public int? PlayerID { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public string? FullName { get; set; } = $"{FirstName} {MiddleName} {LastName} {Suffix}";

        [Required]
        public static string? FirstName { get; set; }

        public static string? MiddleName { get; set; }

        public static string?  LastName { get; set; }

        public static string? Suffix { get; set; }

        public DateTime BirthDate { get; set; }

        public string? EducationalAttainment { get; set; }

        public string? ProfileImageUrl { get; set; }

        public string? Occupation { get; set; }

        public List<string?>? OtherSports { get; set; }

        public string? Role { get; set; }

        public DateTime DateRegistered { get; set; }
        public int MyProperty { get; set; }

        public Team? TeamAssigned { get; set; }

    }
}
