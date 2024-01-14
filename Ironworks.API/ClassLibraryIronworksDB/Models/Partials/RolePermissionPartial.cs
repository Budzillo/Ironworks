using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Models
{
    public partial class RolePermission
    {
        [NotMapped]
        public string RoleName { get; set; }
        [NotMapped]
        public string PermissionName { get; set; }
    }
}
