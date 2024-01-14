using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class FurnaceType
{
    public int FurnaceTypeId { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public virtual ICollection<Furnace> Furnaces { get; set; } = new List<Furnace>();
}
