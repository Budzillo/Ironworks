using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class CarWeightSession
{
    public int CarWeightSessionId { get; set; }

    public int UserId { get; set; }

    public int CarWeightId { get; set; }

    public DateTime DateFrom { get; set; }

    public DateTime? Dateto { get; set; }

    public virtual CarWeight CarWeight { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
