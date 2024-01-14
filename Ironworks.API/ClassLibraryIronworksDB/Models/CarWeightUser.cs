using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class CarWeightUser
{
    public int CarWeightUserId { get; set; }

    public int UserId { get; set; }

    public int CarWeightId { get; set; }

    public virtual CarWeight CarWeight { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
