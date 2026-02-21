using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Coach
    {
        [Key]
        public int CoachID { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Email { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Password { get; set; }

        [Required]
        [MaxLength(11)]
        public string? ContactNumber { get; set; }

        [Required]
        [MaxLength(50)]
        public string? FirstName { get; set; }

        [MaxLength(50)]
        public string? MiddleName { get; set; }

        [MaxLength(50)]
        public string? LastName { get; set; }

        [MaxLength(5)]
        public string? Suffix { get; set; }

        [NotMapped]
        public string? FullName => $"{FirstName} {MiddleName} {LastName} {Suffix}".Trim();

        public DateTime BirthDate { get; set; }

        [MaxLength(30)]
        public string? EducationalAttainment { get; set; }

        [MaxLength(255)]
        public string? ProfileImageUrl { get; set; }

        [MaxLength(20)]
        public string? Occupation { get; set; }

        public List<string?>? OtherSports { get; set; }

        [MaxLength(10)]
        public string? Role { get; set; }

        public DateTime DateRegistered { get; set; }

        // FK to Team
        public int? TeamAssigned { get; set; }

        [ForeignKey(nameof(TeamAssigned))]
        public Team? Team { get; set; }
    }
}