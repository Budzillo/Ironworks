using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class Production
{
    public int ProductionId { get; set; }

    public int FurnaceId { get; set; }

    public int AssortmentId { get; set; }

    public int Status { get; set; }

    public double Efficiency { get; set; }

    public double Brutto { get; set; }

    public double Netto { get; set; }

    public int StopTimeCount { get; set; }

    public double FurnaceEnergy { get; set; }

    public double Clot { get; set; }

    public double Accretion { get; set; }

    public double SideTransport { get; set; }

    public double WasteCollection { get; set; }

    public DateTime Date { get; set; }

    public int UserId { get; set; }

    public virtual Assortment Assortment { get; set; } = null!;

    public virtual Furnace Furnace { get; set; } = null!;

    public virtual ICollection<ProductionHistory> ProductionHistories { get; set; } = new List<ProductionHistory>();

    public virtual ICollection<ProductionMaterial> ProductionMaterials { get; set; } = new List<ProductionMaterial>();

    public virtual User User { get; set; } = null!;
}
