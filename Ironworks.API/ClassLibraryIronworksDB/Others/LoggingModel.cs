using ClassLibraryIronworksDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Others
{
    public class LoggingModel
    {
        public LoggingModel() { }
        public int? LoggedUserId { get; set; }
        public bool IsLogged { get; set; }
        public bool IsBlocked { get; set; }
        public bool IsResetPassword { get; set; }
        public bool IsLoggingError { get; set; }
        public string Login { get; set; }
        public string UserFullName { get; set; }
        public Role Role { get; set; }
        public List<Permission> Permissions { get; set; }
    }
}
