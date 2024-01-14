using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Models
{
    public partial class Production
    {
        [NotMapped]
        public string AssortmentName { get; set; }
        [NotMapped]
        public string FurnaceName { get; set; }
        [NotMapped]
        public string FurnaceKindName { get; set; }
        [NotMapped]
        public string FurnaceTypeName { get; set; }
        [NotMapped]
        public string UserFullName { get; set; }
    }
}
