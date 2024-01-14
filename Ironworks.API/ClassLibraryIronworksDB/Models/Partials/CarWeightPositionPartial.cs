using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Models
{
    public partial class CarWeightPosition
    {
        [NotMapped]
        public string AssortmentName { get; set; }
        [NotMapped]
        public string ContractorName { get; set; }
        [NotMapped]
        public string CarWeightName { get; set; }
    }
}
