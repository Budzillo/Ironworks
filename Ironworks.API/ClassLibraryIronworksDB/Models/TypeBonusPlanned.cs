using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class TypeBonusPlanned
{
    public int TypeBonusPlannedId { get; set; }

    public int FurnaceId { get; set; }

    public int AssortmentId { get; set; }

    public int BonusLevel { get; set; }

    public double Energy { get; set; }

    public double Production { get; set; }

    public virtual Assortment Assortment { get; set; } = null!;

    public virtual Furnace Furnace { get; set; } = null!;
}
