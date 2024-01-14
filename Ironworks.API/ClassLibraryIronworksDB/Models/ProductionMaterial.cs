using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class ProductionMaterial
{
    public int ProductionMaterialId { get; set; }

    public int ProductionId { get; set; }

    public int MaterialId { get; set; }

    public int PlannedValue { get; set; }

    public int Value { get; set; }

    public int OrdinalNumber { get; set; }

    public virtual Material Material { get; set; } = null!;

    public virtual Production Production { get; set; } = null!;
}
