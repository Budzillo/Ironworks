using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class ElectrodePosition
{
    public int ElectrodePositionId { get; set; }

    public int OrdinalNumber { get; set; }

    public double MassQuantity { get; set; }

    public int ElectrodeRegisterId { get; set; }

    public virtual ElectrodeRegister ElectrodeRegister { get; set; } = null!;
}
