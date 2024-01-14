using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class ProductionHistory
{
    public int ProductionHistoryId { get; set; }

    public DateTime Date { get; set; }

    public string Descripton { get; set; } = null!;

    public int ProductionId { get; set; }

    public virtual Production Production { get; set; } = null!;
}
