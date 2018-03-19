using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalClinicDataAccess.Models
{
    public enum Gender { Male, Female };

    public class Patient
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int PatientID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }

        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
