using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.ViewModels
{
    public class ViewSample
    {
        public int SampleId { get; set; }

        public int Type { get; set; }

        public DateTime? Date { get; set; }

        public DateTime DateInsert { get; set; }

        public DateTime DateLastEdit { get; set; }
        public bool IsControl { get; set; }
        public string IsControlText { get; set; }

        public int Change { get; set; }

        public int Weight { get; set; }

        public string Attentions { get; set; }
        public string ContractorName { get; set;}
        public string UserFullName { get; set; }
        public string AssortmentName { get; set; }
        public string MaterialName { get; set; }
    }
}
