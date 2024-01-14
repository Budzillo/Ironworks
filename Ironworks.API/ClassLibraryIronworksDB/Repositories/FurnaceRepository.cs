using ClassLibraryIronworksDB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class FurnaceRepository : BaseRepository
    {
        public FurnaceRepository() { }
        public FurnaceRepository(IronworksContext context) : base(context) { }
        public Task<List<Furnace>> GetFurnaces()
        {
            try
            {
                var query = context.Furnaces
                    .Include(q => q.FurnaceKind)
                    .Include(q => q.FurnaceType)
                    .Select(q => new Furnace
                    {
                        FurnaceId = q.FurnaceId,
                        FurnaceKindId = q.FurnaceKindId,
                        FurnaceTypeId = q.FurnaceTypeId,
                        Name = q.Name,
                        Description = q.Description,
                        FurnaceKindName = q.FurnaceKind.Name,
                        FurnaceTypeName = q.FurnaceType.Name,
                        ElectrodeCount = q.ElectrodeCount,
                        LongName = q.LongName,                         
                    });
                return query.ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public Task<List<Furnace>> GetFurnacesByType(int furnaceTypeId)
        {
            try
            {
                var query = context.Furnaces
                    .Include(q => q.FurnaceKind)
                    .Include(q => q.FurnaceType)
                    .Select(q => new Furnace
                    {
                        FurnaceId = q.FurnaceId,
                        FurnaceKindId = q.FurnaceKindId,
                        FurnaceTypeId = q.FurnaceTypeId,
                        Name = q.Name,
                        Description = q.Description,
                        FurnaceKindName = q.FurnaceKind.Name,
                        FurnaceTypeName = q.FurnaceType.Name,
                        ElectrodeCount = q.ElectrodeCount,
                        LongName = q.LongName,
                    })
                    .Where(q => q.FurnaceTypeId == furnaceTypeId);                        
                return query.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public Task<List<Furnace>> GetFurnacesByKind(int furnaceKindId)
        {
            try
            {
                var query = context.Furnaces
                    .Include(q => q.FurnaceKind)
                    .Include(q => q.FurnaceType)
                    .Select(q => new Furnace
                    {
                        FurnaceId = q.FurnaceId,
                        FurnaceKindId = q.FurnaceKindId,
                        FurnaceTypeId = q.FurnaceTypeId,
                        Name = q.Name,
                        Description = q.Description,
                        FurnaceKindName = q.FurnaceKind.Name,
                        FurnaceTypeName = q.FurnaceType.Name,
                        ElectrodeCount = q.ElectrodeCount,
                        LongName = q.LongName,
                    })
                    .Where(q => q.FurnaceKindId == furnaceKindId);
                return query.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public Task<List<Furnace>> GetFurnaces(int furnaceTypeId,int furnaceKindId)
        {
            try
            {
                var query = context.Furnaces
                    .Include(q => q.FurnaceKind)
                    .Include(q => q.FurnaceType)
                    .Select(q => new Furnace
                    {
                        FurnaceId = q.FurnaceId,
                        FurnaceKindId = q.FurnaceKindId,
                        FurnaceTypeId = q.FurnaceTypeId,
                        Name = q.Name,
                        Description = q.Description,
                        FurnaceKindName = q.FurnaceKind.Name,
                        FurnaceTypeName = q.FurnaceType.Name,
                        ElectrodeCount = q.ElectrodeCount,
                        LongName = q.LongName,
                    })
                    .Where(q=>q.FurnaceTypeId == furnaceTypeId && q.FurnaceKindId == furnaceKindId);
                return query.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> DeleteFurnace(int furnaceId)
        {
            try
            {
                var query = context.Furnaces.FirstOrDefault(q => q.FurnaceId == furnaceId);
                if(query != null)
                {
                    context.Furnaces.Remove(query);
                    return await SaveChangesAsync();
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> SaveFurnace(Furnace furnace)
        {
            try
            {
                if (furnace != null)
                {
                    if(furnace.FurnaceId == 0) context.Furnaces.Add(furnace);
                    else context.Furnaces.Update(furnace);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<List<FurnaceType>> GetFurnaceTypes()
        {
            try
            {
                var query = await context.FurnaceTypes.ToListAsync();
                return query;
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SaveFurnaceType(FurnaceType furnaceType)
        {
            try
            {
                if (furnaceType.FurnaceTypeId == 0)
                {
                    context.FurnaceTypes.Add(furnaceType);
                }
                else context.FurnaceTypes.Update(furnaceType);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> DeleteFurnaceType(int furnaceTypeId)
        {
            try
            {
                FurnaceType furnaceType = context.FurnaceTypes.FirstOrDefault(q => q.FurnaceTypeId == furnaceTypeId);
                if (furnaceType != null)
                {
                    context.FurnaceTypes.Remove(furnaceType);
                    return await SaveChangesAsync();
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<FurnaceKind>> GetFurnaceKinds()
        {
            try
            {
                var query = await context.FurnaceKinds.ToListAsync();
                return query;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SaveFurnaceKind(FurnaceKind furnaceKind)
        {
            try
            {
                if(furnaceKind.FurnaceKindId == 0)
                {
                    context.FurnaceKinds.Add(furnaceKind);
                }
                else context.FurnaceKinds.Update(furnaceKind);
                return await SaveChangesAsync();
            }
            catch( Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> DeleteFurnaceKind(int furnaceKindId)
        {
            try
            {
                FurnaceKind furnaceKind = context.FurnaceKinds.FirstOrDefault(q=>q.FurnaceKindId == furnaceKindId);
                if(furnaceKind != null)
                {
                    context.FurnaceKinds.Remove(furnaceKind);
                    return await SaveChangesAsync();
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
