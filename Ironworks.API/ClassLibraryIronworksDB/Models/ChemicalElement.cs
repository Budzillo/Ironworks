using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class ChemicalElement
{
    public int ChemicalElementId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<SampleChemicalElement> SampleChemicalElements { get; set; } = new List<SampleChemicalElement>();
}
