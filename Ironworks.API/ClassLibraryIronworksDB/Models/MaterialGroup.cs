using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class MaterialGroup
{
    public int MaterialGroupId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Material> Materials { get; set; } = new List<Material>();
}
