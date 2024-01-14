using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class ChemicalCompound
{
    public int ChemicalCompoundId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<SampleChemicalCompound> SampleChemicalCompounds { get; set; } = new List<SampleChemicalCompound>();
}
