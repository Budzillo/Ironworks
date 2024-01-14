using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class CarWeight
{
    public int CarWeightId { get; set; }

    public string Name { get; set; } = null!;

    public string Localization { get; set; } = null!;

    public virtual ICollection<CarWeightPosition> CarWeightPositions { get; set; } = new List<CarWeightPosition>();

    public virtual ICollection<CarWeightSession> CarWeightSessions { get; set; } = new List<CarWeightSession>();
}
