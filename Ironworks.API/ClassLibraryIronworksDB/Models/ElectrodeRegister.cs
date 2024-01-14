using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class ElectrodeRegister
{
    public int ElectrodeRegisterId { get; set; }

    public DateTime Date { get; set; }

    public int FurnaceId { get; set; }

    public virtual ICollection<ElectrodePosition> ElectrodePositions { get; set; } = new List<ElectrodePosition>();

    public virtual Furnace Furnace { get; set; } = null!;
}
