using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class Furnace
{
    public int FurnaceId { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public int? ElectrodeCount { get; set; }

    public string LongName { get; set; } = null!;

    public int? FurnaceTypeId { get; set; }

    public int? FurnaceKindId { get; set; }

    public virtual ICollection<ElectrodeRegister> ElectrodeRegisters { get; set; } = new List<ElectrodeRegister>();

    public virtual FurnaceKind? FurnaceKind { get; set; }

    public virtual FurnaceType? FurnaceType { get; set; }

    public virtual ICollection<Production> Productions { get; set; } = new List<Production>();

    public virtual ICollection<TypeBonusPlanned> TypeBonusPlanneds { get; set; } = new List<TypeBonusPlanned>();
}
