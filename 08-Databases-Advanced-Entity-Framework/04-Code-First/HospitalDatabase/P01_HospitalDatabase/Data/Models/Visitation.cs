﻿namespace P01_HospitalDatabase.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Visitations")]
    public class Visitation
    {
        [Key]
        public int VisitationId { get; set; }

        public DateTime Date { get; set; }

        [StringLength(250)]
        public string Comments { get; set; }

        [ForeignKey(nameof(DoctorId))]
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        [ForeignKey(nameof(PatientId))]
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
    }
}
