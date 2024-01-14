using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Models
{
    public partial class User
    {
        [NotMapped]
        public string FullName { get; set; }
        [NotMapped]
        public string DepartmentName { get; set; }

        [NotMapped]
        public string RoleName { get; set; }
        [NotMapped]
        public string IsBlockedText { get; set; }
    }
}
