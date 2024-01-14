using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class Sample
{
    public int SampleId { get; set; }

    public int Type { get; set; }

    public int MaterialId { get; set; }

    public DateTime? Date { get; set; }

    public DateTime DateInsert { get; set; }

    public DateTime DateLastEdit { get; set; }

    public int AssortmentId { get; set; }

    public bool IsControl { get; set; }

    public int Change { get; set; }

    public int Weight { get; set; }

    public string Attentions { get; set; } = null!;

    public int UserId { get; set; }

    public int CarWeightPositionId { get; set; }

    public virtual Assortment Assortment { get; set; } = null!;

    public virtual CarWeightPosition CarWeightPosition { get; set; } = null!;

    public virtual Material Material { get; set; } = null!;

    public virtual ICollection<SampleChemicalCompound> SampleChemicalCompounds { get; set; } = new List<SampleChemicalCompound>();

    public virtual ICollection<SampleChemicalElement> SampleChemicalElements { get; set; } = new List<SampleChemicalElement>();

    public virtual ICollection<SampleHistory> SampleHistories { get; set; } = new List<SampleHistory>();

    public virtual User User { get; set; } = null!;
}
