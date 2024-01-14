using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class UserHistory
{
    public int UserHistoryId { get; set; }

    public int UserId { get; set; }

    public DateTime DateInsert { get; set; }

    public string Description { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
