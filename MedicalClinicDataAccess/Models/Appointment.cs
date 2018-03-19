using System;


namespace MedicalClinicDataAccess.Models
{
    public class Appointment
    {
        public int AppointmentID { get; set; }
        public int PatientID { get; set; }
        public int AppointmentTypeID { get; set; }
        public DateTime Date { get; set; }

        public virtual Patient Patient { get; set; }
        public virtual AppointmentType AppointmentType { get; set; }
    }
}
