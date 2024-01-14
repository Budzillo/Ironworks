using ClassLibraryIronworksDB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class ProductionRepository : BaseRepository
    {
        public ProductionRepository()
        {

        }
        public ProductionRepository(IronworksContext ironworksContext) : base(ironworksContext)
        {

        }
        public async Task<List<Production>> GetProductions(DateTime dateStart, DateTime dateEnd)
        {
            try
            {
                return await context.Productions
                    .Include(q=>q.Furnace)
                    .Include(q=>q.Assortment)
                    .Include(q=>q.ProductionMaterials)
                    .Include(q=>q.ProductionHistories)
                    .Where(q=>q.Date >= dateStart && q.Date <= dateEnd)
                    .Select(q=> new Production()
                    {
                        ProductionId = q.ProductionId,
                        FurnaceId = q.FurnaceId,
                        FurnaceName = q.Furnace.Name,
                        FurnaceKindName = q.Furnace.FurnaceKind != null ? q.Furnace.FurnaceKind.Name : "BRAK",
                        FurnaceTypeName = q.Furnace.FurnaceType != null ? q.Furnace.FurnaceType.Name : "BRAK",
                        AssortmentId = q.AssortmentId,
                        AssortmentName = q.Assortment.Name,
                        Status = q.Status,
                        Efficiency = q.Efficiency,
                        Brutto = q.Brutto,
                        Netto = q.Netto,
                        StopTimeCount = q.StopTimeCount,
                        FurnaceEnergy = q.FurnaceEnergy,
                        Clot = q.Clot,
                        Accretion = q.Accretion,
                        SideTransport = q.SideTransport,
                        WasteCollection = q.WasteCollection,
                        Date = q.Date,
                        UserId = q.UserId,
                        UserFullName = $"{q.User.FirstName} {q.User.LastName}"
                    })
                    .ToListAsync();
            }
            catch (Exception ex) 
            {
                return null;
            }
        }
        public async Task<bool> DeleteProduction(int productionId)
        {
            try
            {
                Production production = context.Productions.FirstOrDefault(q => q.ProductionId == productionId);
                if(production != null)
                {
                    context.Productions.Remove(production);
                    return await SaveChangesAsync();
                }
                return false;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> SaveProduction(Production production)
        {
            try
            {
                if (production.ProductionId == 0) context.Productions.Add(production);
                else context.Productions.Update(production);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<ProductionHistory>> GetProductionHistories()
        {
            try
            {
                return await context.ProductionHistories
                    .Include(q=>q.Production)
                    .OrderByDescending(q=>q.Date)
                    .Take(100)
                    .ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<List<ProductionMaterial>> GetProductionMaterials(int productionId)
        {
            try
            {
                return await context.ProductionMaterials
                    .Include(q=>q.Material)
                    .Where(q=>q.ProductionId == productionId)
                    .Select(q=> new ProductionMaterial
                    {
                         MaterialId = q.MaterialId,
                         MaterialName = q.Material.Name,
                         OrdinalNumber = q.OrdinalNumber,
                         PlannedValue = q.PlannedValue,
                         ProductionId = q.ProductionId,
                         Value = q.Value,                                                     
                    })
                    .ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
    }
}
