using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class SampleChemicalElement
{
    public int SampleChemicalElementId { get; set; }

    public int SampleId { get; set; }

    public double Value { get; set; }

    public int OrdinalNumber { get; set; }

    public int ChemicalElementId { get; set; }

    public virtual ChemicalElement ChemicalElement { get; set; } = null!;

    public virtual Sample Sample { get; set; } = null!;
}
