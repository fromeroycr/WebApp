using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicalClinic.Common
{
    public enum OperationResult { Sucessful, Failed }

    public class ResponseModel
    {
        public OperationResult Result { get; set; }
        public string Message { get; set; }        
    }
}
