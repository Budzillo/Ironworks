using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class SampleHistory
{
    public int SampleHistoryId { get; set; }

    public string Description { get; set; } = null!;

    public DateTime Date { get; set; }

    public int SampleId { get; set; }

    public virtual Sample Sample { get; set; } = null!;
}
