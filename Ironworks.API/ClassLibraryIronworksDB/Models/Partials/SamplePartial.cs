using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Models
{
    public partial class Sample
    {
        [NotMapped]
        public string UserFullName { get; set; }
        [NotMapped]
        public string CarWeightPositionNumber { get; set; }
        [NotMapped]
        public string AssortmentName { get; set; }
        [NotMapped]
        public string MaterialName { get; set; }

    }
}
