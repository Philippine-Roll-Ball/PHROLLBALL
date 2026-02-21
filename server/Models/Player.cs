using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Player
    {
        [Key]
        public int? PlayerID { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Email { get; set; }

        [Required]
        [MaxLength(11)]
        public string? ContactNumber { get; set; }

        [Required]
        [MaxLength(50)]
        public string? FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? MiddleName { get; set; }

        [Required]
        [MaxLength(50)]
        public string?  LastName { get; set; }

        [MaxLength(5)]
        public string? Suffix { get; set; }

        [NotMapped]
        public string? FullName => $"{FirstName} {MiddleName} {LastName} {Suffix}".Trim();


        public DateTime BirthDate { get; set; }



        [MaxLength(30)]
        public string? EducationalAttainment { get; set; }

        [MaxLength(255)]

        public string? ProfileImageUrl { get; set; }

        [MaxLength(30)]
        public string? Occupation { get; set; }

        public List<string?>? OtherSports { get; set; }

        [MaxLength(10)]
        public string? Role { get; set; }

        public DateTime DateRegistered { get; set; }

        public int? TeamID { get; set; }

        [ForeignKey(nameof(TeamID))]
        public Team? TeamAssigned { get; set; }
    }
}
