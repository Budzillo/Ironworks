using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class CarWeightPosition
{
    public int CarWeightPositionId { get; set; }

    public int AssortmentId { get; set; }

    public int ContractorId { get; set; }

    public string Customer { get; set; } = null!;

    public string Number { get; set; } = null!;

    public DateTime Date { get; set; }

    public string Operator { get; set; } = null!;

    public double Weight1Value { get; set; }

    public double Weight2Value { get; set; }

    public double MassNetto { get; set; }

    public double MassAssortmentNetto { get; set; }

    public double Netto { get; set; }

    public int CarWeightId { get; set; }

    public virtual Assortment Assortment { get; set; } = null!;

    public virtual CarWeight CarWeight { get; set; } = null!;

    public virtual Contractor Contractor { get; set; } = null!;

    public virtual ICollection<Sample> Samples { get; set; } = new List<Sample>();
}
