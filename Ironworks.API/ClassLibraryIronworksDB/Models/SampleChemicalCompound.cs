using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class SampleChemicalCompound
{
    public int SampleChemicalCompoundId { get; set; }

    public int SampleId { get; set; }

    public double Value { get; set; }

    public int ChemicalCompoundId { get; set; }

    public int OrdinalNumber { get; set; }

    public virtual ChemicalCompound ChemicalCompound { get; set; } = null!;

    public virtual Sample Sample { get; set; } = null!;
}
