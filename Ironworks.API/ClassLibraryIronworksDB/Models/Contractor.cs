using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class Contractor
{
    public int ContractorId { get; set; }

    public string Name { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Country { get; set; } = null!;

    public string PostalNumber { get; set; } = null!;

    public string Nip { get; set; } = null!;

    public virtual ICollection<CarWeightPosition> CarWeightPositions { get; set; } = new List<CarWeightPosition>();
}
