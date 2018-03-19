using MedicalClinic.Common;
using MedicalClinicDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicalClinicRepositories.Interfaces
{
    public interface IPatientsRepository
    {
        IEnumerable<Patient> GetPatients();
        Patient GetPatient(int idPatient);
        ResponseModel CreatePatient(Patient patient);
        ResponseModel UpdatePatient(int idPatient, Patient patient);
        ResponseModel DeletePatient(int idPatient);
    }
}
