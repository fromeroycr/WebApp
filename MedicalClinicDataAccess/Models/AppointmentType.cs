using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalClinicDataAccess.Models
{
    public class AppointmentType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int AppointmentTypeID { get; set; }
        public string Descripcion { get; set; }
    }
}
