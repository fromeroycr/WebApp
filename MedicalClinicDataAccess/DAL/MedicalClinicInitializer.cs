using MedicalClinicDataAccess.Models;
using System;
using System.Collections.Generic;

namespace MedicalClinicDataAccess.DAL
{
    public class MedicalClinicInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<MedicalClinicContext>
    //public class MedicalClinicInitializer : System.Data.Entity.DropCreateDatabaseAlways<MedicalClinicContext>
    {
        protected override void Seed(MedicalClinicContext context)
        {
            var appointmentTypes = new List<AppointmentType>
            {
                new AppointmentType{ AppointmentTypeID = 1, Descripcion = "Medicina General" },
                new AppointmentType{ AppointmentTypeID = 2, Descripcion = "Odontología" },
                new AppointmentType{ AppointmentTypeID = 3, Descripcion = "Pediatría" },
                new AppointmentType{ AppointmentTypeID = 4, Descripcion = "Neurología" }
            };

            appointmentTypes.ForEach(ap => context.AppointmentType.Add(ap));
            context.SaveChanges();


            var pacients = new List<Patient>
            {
                new Patient{ PatientID = 1, Name="Bob Ramirez", Age = 30, Gender = Gender.Male, Appointments = null   },
                new Patient{ PatientID = 2, Name="Carlos Venegas", Age = 25, Gender = Gender.Male, Appointments = null   },
                new Patient{ PatientID = 3, Name="Daniela Alfaro", Age = 20, Gender = Gender.Female, Appointments = null   },
                new Patient{ PatientID = 4, Name="Lucas", Age = 20, Gender = Gender.Male, Appointments = null   }
            };

            pacients.ForEach(patient => context.Patients.Add(patient));
            context.SaveChanges();


            var appointments = new List<Appointment>
            {
                new Appointment{PatientID=1, AppointmentTypeID = 1, Date = new DateTime(2018, 3, 17) },
                new Appointment{PatientID=2, AppointmentTypeID = 2, Date = new DateTime(2018, 4, 17) },
                new Appointment{PatientID=3, AppointmentTypeID = 3, Date = new DateTime(2018, 5, 17) },
                new Appointment{PatientID=4, AppointmentTypeID = 4, Date = new DateTime(2018, 6, 17) }
            };
            appointments.ForEach(a => context.Appointments.Add(a));
            context.SaveChanges();
        }
    }
}

