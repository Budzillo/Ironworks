using System;
using System.Collections.Generic;

namespace ClassLibraryIronworksDB.Models;

public partial class User
{
    public int UserId { get; set; }

    public string FirstName { get; set; } = null!;

    public string? LastName { get; set; }

    public string Login { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Email { get; set; }

    public int? RoleId { get; set; }

    public int? DepartmentId { get; set; }

    public bool IsBlocked { get; set; }

    public virtual ICollection<CarWeightSession> CarWeightSessions { get; set; } = new List<CarWeightSession>();

    public virtual Department? Department { get; set; }

    public virtual ICollection<Production> Productions { get; set; } = new List<Production>();

    public virtual Role? Role { get; set; }

    public virtual ICollection<Sample> Samples { get; set; } = new List<Sample>();

    public virtual ICollection<UserHistory> UserHistories { get; set; } = new List<UserHistory>();
}
