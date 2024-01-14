using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class Material
{
    public int MaterialId { get; set; }

    public string Name { get; set; } = null!;

    public int? MaterialGroupId { get; set; }

    public virtual MaterialGroup? MaterialGroup { get; set; }

    public virtual ICollection<ProductionMaterial> ProductionMaterials { get; set; } = new List<ProductionMaterial>();

    public virtual ICollection<Sample> Samples { get; set; } = new List<Sample>();
}
