using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ClassLibraryIronworksDB.Models;

public partial class IronworksContext : DbContext
{
    public IronworksContext()
    {
    }

    public IronworksContext(DbContextOptions<IronworksContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Assortment> Assortments { get; set; }

    public virtual DbSet<CarWeight> CarWeights { get; set; }

    public virtual DbSet<CarWeightPosition> CarWeightPositions { get; set; }

    public virtual DbSet<CarWeightSession> CarWeightSessions { get; set; }

    public virtual DbSet<ChemicalCompound> ChemicalCompounds { get; set; }

    public virtual DbSet<ChemicalElement> ChemicalElements { get; set; }

    public virtual DbSet<Contractor> Contractors { get; set; }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<ElectrodePosition> ElectrodePositions { get; set; }

    public virtual DbSet<ElectrodeRegister> ElectrodeRegisters { get; set; }

    public virtual DbSet<Furnace> Furnaces { get; set; }

    public virtual DbSet<FurnaceKind> FurnaceKinds { get; set; }

    public virtual DbSet<FurnaceType> FurnaceTypes { get; set; }

    public virtual DbSet<Material> Materials { get; set; }

    public virtual DbSet<MaterialGroup> MaterialGroups { get; set; }

    public virtual DbSet<Permission> Permissions { get; set; }

    public virtual DbSet<Production> Productions { get; set; }

    public virtual DbSet<ProductionHistory> ProductionHistories { get; set; }

    public virtual DbSet<ProductionMaterial> ProductionMaterials { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<RolePermission> RolePermissions { get; set; }

    public virtual DbSet<Sample> Samples { get; set; }

    public virtual DbSet<SampleChemicalCompound> SampleChemicalCompounds { get; set; }

    public virtual DbSet<SampleChemicalElement> SampleChemicalElements { get; set; }

    public virtual DbSet<SampleHistory> SampleHistories { get; set; }

    public virtual DbSet<TypeBonusPlanned> TypeBonusPlanneds { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserHistory> UserHistories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PB\\SQLEXPRESS;database=Ironworks;trusted_connection=true;trustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Assortment>(entity =>
        {
            entity.ToTable("Assortment");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<CarWeight>(entity =>
        {
            entity.ToTable("CarWeight");

            entity.Property(e => e.Localization)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<CarWeightPosition>(entity =>
        {
            entity.ToTable("CarWeightPosition");

            entity.Property(e => e.Customer)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Number)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Operator)
                .HasMaxLength(80)
                .IsUnicode(false);

            entity.HasOne(d => d.Assortment).WithMany(p => p.CarWeightPositions)
                .HasForeignKey(d => d.AssortmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assortment_CarWeightPosition");

            entity.HasOne(d => d.CarWeight).WithMany(p => p.CarWeightPositions)
                .HasForeignKey(d => d.CarWeightId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CarWeight_CarWeightPosition");

            entity.HasOne(d => d.Contractor).WithMany(p => p.CarWeightPositions)
                .HasForeignKey(d => d.ContractorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Contractor_CarWeightPosition");
        });

        modelBuilder.Entity<CarWeightSession>(entity =>
        {
            entity.HasKey(e => e.CarWeightSessionId).HasName("PK_CarWeightUser");

            entity.ToTable("CarWeightSession");

            entity.Property(e => e.DateFrom).HasColumnType("date");
            entity.Property(e => e.Dateto).HasColumnType("date");

            entity.HasOne(d => d.CarWeight).WithMany(p => p.CarWeightSessions)
                .HasForeignKey(d => d.CarWeightId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CarWeight_CarWeightUser");

            entity.HasOne(d => d.User).WithMany(p => p.CarWeightSessions)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_User_CarWeightUser");
        });

        modelBuilder.Entity<ChemicalCompound>(entity =>
        {
            entity.ToTable("ChemicalCompound");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ChemicalElement>(entity =>
        {
            entity.ToTable("ChemicalElement");

            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Contractor>(entity =>
        {
            entity.ToTable("Contractor");

            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Country)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Nip)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("NIP");
            entity.Property(e => e.PostalNumber)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity.ToTable("Department");

            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ElectrodePosition>(entity =>
        {
            entity.ToTable("ElectrodePosition");

            entity.HasOne(d => d.ElectrodeRegister).WithMany(p => p.ElectrodePositions)
                .HasForeignKey(d => d.ElectrodeRegisterId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ElectrodeRegister_ElectrodePosition");
        });

        modelBuilder.Entity<ElectrodeRegister>(entity =>
        {
            entity.ToTable("ElectrodeRegister");

            entity.Property(e => e.Date).HasColumnType("datetime");

            entity.HasOne(d => d.Furnace).WithMany(p => p.ElectrodeRegisters)
                .HasForeignKey(d => d.FurnaceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Furnace_ElectrodeRegister");
        });

        modelBuilder.Entity<Furnace>(entity =>
        {
            entity.ToTable("Furnace");

            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.LongName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.FurnaceKind).WithMany(p => p.Furnaces)
                .HasForeignKey(d => d.FurnaceKindId)
                .HasConstraintName("FK_FurnaceKind_Furnace");

            entity.HasOne(d => d.FurnaceType).WithMany(p => p.Furnaces)
                .HasForeignKey(d => d.FurnaceTypeId)
                .HasConstraintName("FK_FurnaceType_Furnace");
        });

        modelBuilder.Entity<FurnaceKind>(entity =>
        {
            entity.ToTable("FurnaceKind");

            entity.Property(e => e.Description)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FurnaceType>(entity =>
        {
            entity.ToTable("FurnaceType");

            entity.Property(e => e.Description)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Material>(entity =>
        {
            entity.ToTable("Material");

            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.MaterialGroup).WithMany(p => p.Materials)
                .HasForeignKey(d => d.MaterialGroupId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK_MaterialGroup_Material");
        });

        modelBuilder.Entity<MaterialGroup>(entity =>
        {
            entity.ToTable("MaterialGroup");

            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Permission>(entity =>
        {
            entity.ToTable("Permission");

            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Production>(entity =>
        {
            entity.ToTable("Production");

            entity.Property(e => e.Date).HasColumnType("datetime");

            entity.HasOne(d => d.Assortment).WithMany(p => p.Productions)
                .HasForeignKey(d => d.AssortmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assortment_Production");

            entity.HasOne(d => d.Furnace).WithMany(p => p.Productions)
                .HasForeignKey(d => d.FurnaceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Furnace_Production");

            entity.HasOne(d => d.User).WithMany(p => p.Productions)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_User_Production");
        });

        modelBuilder.Entity<ProductionHistory>(entity =>
        {
            entity.ToTable("ProductionHistory");

            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Descripton)
                .HasMaxLength(200)
                .IsUnicode(false);

            entity.HasOne(d => d.Production).WithMany(p => p.ProductionHistories)
                .HasForeignKey(d => d.ProductionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Production_ProductionHistory");
        });

        modelBuilder.Entity<ProductionMaterial>(entity =>
        {
            entity.ToTable("ProductionMaterial");

            entity.HasOne(d => d.Material).WithMany(p => p.ProductionMaterials)
                .HasForeignKey(d => d.MaterialId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Material_ProductionMaterial");

            entity.HasOne(d => d.Production).WithMany(p => p.ProductionMaterials)
                .HasForeignKey(d => d.ProductionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Production_ProductionMaterial");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("Role");

            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<RolePermission>(entity =>
        {
            entity.ToTable("RolePermission");

            entity.HasOne(d => d.Permission).WithMany(p => p.RolePermissions)
                .HasForeignKey(d => d.PermissionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Permission_RolePermission");

            entity.HasOne(d => d.Role).WithMany(p => p.RolePermissions)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Role_RolePermission");
        });

        modelBuilder.Entity<Sample>(entity =>
        {
            entity.ToTable("Sample");

            entity.Property(e => e.Attentions)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.DateInsert).HasColumnType("datetime");
            entity.Property(e => e.DateLastEdit).HasColumnType("datetime");

            entity.HasOne(d => d.Assortment).WithMany(p => p.Samples)
                .HasForeignKey(d => d.AssortmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assortment_Sample");

            entity.HasOne(d => d.CarWeightPosition).WithMany(p => p.Samples)
                .HasForeignKey(d => d.CarWeightPositionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CarWeightPosition_Sample");

            entity.HasOne(d => d.Material).WithMany(p => p.Samples)
                .HasForeignKey(d => d.MaterialId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Material_Sample");

            entity.HasOne(d => d.User).WithMany(p => p.Samples)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_User_Sample");
        });

        modelBuilder.Entity<SampleChemicalCompound>(entity =>
        {
            entity.ToTable("SampleChemicalCompound");

            entity.HasOne(d => d.ChemicalCompound).WithMany(p => p.SampleChemicalCompounds)
                .HasForeignKey(d => d.ChemicalCompoundId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ChemicalCompound_SampleChemicalCompound");

            entity.HasOne(d => d.Sample).WithMany(p => p.SampleChemicalCompounds)
                .HasForeignKey(d => d.SampleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Sample_SampleChemicalCompound");
        });

        modelBuilder.Entity<SampleChemicalElement>(entity =>
        {
            entity.ToTable("SampleChemicalElement");

            entity.HasOne(d => d.ChemicalElement).WithMany(p => p.SampleChemicalElements)
                .HasForeignKey(d => d.ChemicalElementId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ChemicalElement_SampleChemicalElement");

            entity.HasOne(d => d.Sample).WithMany(p => p.SampleChemicalElements)
                .HasForeignKey(d => d.SampleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Sample_SampleChemicalElement");
        });

        modelBuilder.Entity<SampleHistory>(entity =>
        {
            entity.ToTable("SampleHistory");

            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.Sample).WithMany(p => p.SampleHistories)
                .HasForeignKey(d => d.SampleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Sample_SampleHistory");
        });

        modelBuilder.Entity<TypeBonusPlanned>(entity =>
        {
            entity.ToTable("TypeBonusPlanned");

            entity.HasOne(d => d.Assortment).WithMany(p => p.TypeBonusPlanneds)
                .HasForeignKey(d => d.AssortmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assortment_TypeBonusPlanned");

            entity.HasOne(d => d.Furnace).WithMany(p => p.TypeBonusPlanneds)
                .HasForeignKey(d => d.FurnaceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Furnace_TypeBonusPlanned");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");

            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Login)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.Department).WithMany(p => p.Users)
                .HasForeignKey(d => d.DepartmentId)
                .HasConstraintName("FK_User_Department");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_User_Role");
        });

        modelBuilder.Entity<UserHistory>(entity =>
        {
            entity.ToTable("UserHistory");

            entity.Property(e => e.UserHistoryId).ValueGeneratedNever();
            entity.Property(e => e.DateInsert).HasColumnType("date");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .IsUnicode(false);

            entity.HasOne(d => d.User).WithMany(p => p.UserHistories)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserHistory_User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
