using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class Assortment
{
    public int AssortmentId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<CarWeightPosition> CarWeightPositions { get; set; } = new List<CarWeightPosition>();

    public virtual ICollection<Production> Productions { get; set; } = new List<Production>();

    public virtual ICollection<Sample> Samples { get; set; } = new List<Sample>();

    public virtual ICollection<TypeBonusPlanned> TypeBonusPlanneds { get; set; } = new List<TypeBonusPlanned>();
}
