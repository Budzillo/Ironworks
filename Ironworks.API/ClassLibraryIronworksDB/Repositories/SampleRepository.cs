using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Tracing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class SampleRepository : BaseRepository
    {
        public SampleRepository() 
        {
            
        }
        public SampleRepository(IronworksContext ironworksContext) : base(ironworksContext)
        {

        }
        public Task<List<Assortment>> GetAssortments()
        {
            try
            {                
                return context.Assortments.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> DeleteAssortment(int assortmentId)
        {
            try
            {
                Assortment assortment = context.Assortments.FirstOrDefault(q => q.AssortmentId == assortmentId);
                if (assortment != null)
                {
                    context.Assortments.Remove(assortment);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch(Exception ex) 
            {
                Trace.WriteLine(ex);
                return false;
            }
        }
        public async Task<bool> SaveAssortment(Assortment assortment)
        {
            try
            {
                if(assortment.AssortmentId == 0) context.Assortments.Add(assortment);
                else context.Assortments.Update(assortment);
                return await SaveChangesAsync();
            }
            catch(Exception ex )
            {
                Trace.WriteLine(ex);
                return false;   
            }
        }
        public Assortment GetAssortmentById(int assortmentId)
        {
            try
            {
                return context.Assortments.FirstOrDefault(q => q.AssortmentId == assortmentId);
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public Task<List<ChemicalElement>> GetChemicalElements()
        {
            try
            {
                return context.ChemicalElements.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> InsertChemicalElement(ChemicalElement chemicalElement)
        {
            try
            {
                context.ChemicalElements.Add(chemicalElement);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> UpdateChemicalElement(ChemicalElement chemicalElement)
        {
            try
            {
                context.ChemicalElements.Update(chemicalElement);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> DeleteChemicalElement(int chemicalElementdId)
        {
            try
            {
                var query = context.ChemicalElements.FirstOrDefault(q => q.ChemicalElementId == chemicalElementdId);
                if (query != null)
                {
                    context.ChemicalElements.Remove(query);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public Task<List<ChemicalCompound>> GetChemicalCompounds()
        {
            try
            {
                return context.ChemicalCompounds.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> InsertChemicalCompound(ChemicalCompound chemicalCompound)
        {
            try
            {
                context.ChemicalCompounds.Add(chemicalCompound);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> UpdateChemicalCompound(ChemicalCompound chemicalCompound)
        {
            try
            {
                context.ChemicalCompounds.Update(chemicalCompound);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> DeleteChemicalCompound(int chemicalCompoundId)
        {
            try
            {
                var query = context.ChemicalCompounds.FirstOrDefault(q => q.ChemicalCompoundId == chemicalCompoundId);
                if(query != null)
                {
                    context.ChemicalCompounds.Remove(query);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public Task<List<Material>> GetMaterials()
        {
            try
            {
                return context.Materials.Include(q=>q.MaterialGroup).Select(q=>new Material
                {
                    MaterialGroupId = q.MaterialGroupId,
                    MaterialId = q.MaterialId,
                    GroupName = q.MaterialGroup != null ? q.MaterialGroup.Name : "BRAK",
                    Name = q.Name,                     
                }).ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SaveMaterial(Material material)
        {
            try
            {
                if(material.MaterialId == 0) context.Materials.Add(material);
                else context.Materials.Update(material);
                return await SaveChangesAsync();
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> DeleteMaterial(int materialId)
        {
            try
            {
                Material material = context.Materials.FirstOrDefault(q => q.MaterialId == materialId);
                if(material == null) return false;
                else
                {
                    context.Materials.Remove(material);
                    return await SaveChangesAsync();
                }
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public Task<List<Material>> GetMaterialByGroups(List<int> materialGroupIds)
        {
            try
            {
                return context.Materials.Include(q => q.MaterialGroup).Where(q=>materialGroupIds.Contains((int)q.MaterialGroupId)).Select(q => new Material
                {
                    MaterialGroupId = q.MaterialGroupId,
                    MaterialId = q.MaterialId,
                    GroupName = q.MaterialGroup != null ? q.MaterialGroup.Name : "BRAK",
                    Name = q.Name,
                }).ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public Task<List<MaterialGroup>> GetMaterialGroups()
        {
            try
            {
                return context.MaterialGroups.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> IsAnyMaterialConnectedWithMaterialGroup(int materialGroupId)
        {
            try
            {
                MaterialGroup materialGroup = await context.MaterialGroups.Include(q => q.Materials).FirstOrDefaultAsync(q => q.MaterialGroupId == materialGroupId);                
                return materialGroup != null ? materialGroup.Materials.Count > 0 ? true : false : false;

            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> SaveMaterialGroup(MaterialGroup materialGroup)
        {
            try
            {
                if (materialGroup.MaterialGroupId == 0) context.MaterialGroups.Add(materialGroup);
                else context.MaterialGroups.Update(materialGroup);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> DeleteMaterialGroup(int materialGroupId)
        {
            try
            {
                MaterialGroup materialGroup = context.MaterialGroups.FirstOrDefault(q => q.MaterialGroupId == materialGroupId);
                if (materialGroup == null) return false;
                else
                {
                    context.MaterialGroups.Remove(materialGroup);
                    return await SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<Sample>> GetSamples()
        {
            try
            {
                return await context.Samples
                    .Include(q => q.SampleHistories)
                    .Include(q => q.User)
                    .Include(q => q.Assortment)
                    .Include(q => q.CarWeightPosition)
                    .Include(q => q.SampleChemicalCompounds).ThenInclude(q=>q.ChemicalCompound)
                    .Include(q => q.SampleChemicalElements).ThenInclude(q=>q.ChemicalElement)
                    .Select(q => new Sample
                    {
                        SampleId = q.SampleId,
                        MaterialId = q.MaterialId,
                        AssortmentId = q.AssortmentId,
                        AssortmentName = q.Assortment.Name,
                        Attentions = q.Attentions,
                        Date = q.Date,
                        DateInsert = q.DateInsert,
                        DateLastEdit = q.DateLastEdit,
                        CarWeightPositionId = q.CarWeightPositionId,
                        CarWeightPositionNumber = q.CarWeightPosition.Number,
                        Change = q.Change,
                        IsControl = q.IsControl,
                        MaterialName = q.Material.Name,
                        Type = q.Type,
                        UserId = q.UserId,
                        UserFullName = $"{q.User.FirstName} {q.User.LastName}",
                        Weight = q.Weight,
                        SampleChemicalCompounds = (ICollection<SampleChemicalCompound>)q.SampleChemicalCompounds.Select(q => new SampleChemicalCompound
                        {
                            SampleId = q.SampleId,
                            ChemicalCompoundId = q.ChemicalCompoundId,
                            ChemicalCompoundName = q.ChemicalCompound.Name,
                            OrdinalNumber = q.OrdinalNumber,
                            Value = q.Value,
                            ChemicalCompound = q.ChemicalCompound,
                            SampleChemicalCompoundId = q.SampleChemicalCompoundId,
                        }),
                        SampleChemicalElements = (ICollection<SampleChemicalElement>)q.SampleChemicalElements.Select(q => new SampleChemicalElement
                        {
                            SampleId = q.SampleId,
                            ChemicalElementId = q.ChemicalElementId,
                            ChemicalElementName = q.ChemicalElement.Name,
                            OrdinalNumber = q.OrdinalNumber,
                            Value = q.Value,
                            ChemicalElement = q.ChemicalElement,
                            SampleChemicalElementId = q.SampleChemicalElementId
                        }),
                        SampleHistories = q.SampleHistories,                         
                    })
                    .ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<List<ViewSample>> GetViewSamples()
        {
            try
            {
                return await context.Samples
                .Select(q => new ViewSample
                {
                    SampleId = q.SampleId,
                    Type = q.Type,
                    Date = q.Date,
                    DateInsert = q.DateInsert,
                    DateLastEdit = q.DateLastEdit,
                    IsControl = q.IsControl,
                    IsControlText = q.IsControl ? "Kontrolna" : "Robocza",
                    Change = q.Change,
                    Weight = q.Weight,
                    Attentions = q.Attentions,
                    UserFullName = q.User != null ? q.User.FullName : "Brak użytkownika",
                    AssortmentName = q.Assortment != null ? q.Assortment.Name : "Brak asortymentu",
                    MaterialName = q.Material != null ? q.Material.Name : "Brak surowca"
                }).ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<List<ViewSample>> GetViewSamplesByDate(DateTime dateStart,DateTime dateEnd)
        {
            try
            {
                return await context.Samples
                .Where(q=>q.Date >= dateStart && q.Date <= dateEnd)
                .Select(q => new ViewSample
                {
                    SampleId = q.SampleId,
                    Type = q.Type,
                    Date = q.Date,
                    DateInsert = q.DateInsert,
                    DateLastEdit = q.DateLastEdit,
                    IsControl = q.IsControl,
                    IsControlText = q.IsControl ? "Kontrolna" : "Robocza",
                    Change = q.Change,
                    Weight = q.Weight,
                    Attentions = q.Attentions,
                    UserFullName = q.User != null ? q.User.FullName : "Brak użytkownika",
                    AssortmentName = q.Assortment != null ? q.Assortment.Name : "Brak asortymentu",
                    MaterialName = q.Material != null ? q.Material.Name : "Brak surowca"
                }).ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SaveSample(Sample sample)
        {
            try
            {
                if (sample.SampleId == 0)
                {
                    context.Samples.Add(sample);
                }
                else context.Samples.Update(sample);
                return await SaveChangesAsync();
            }
            catch(Exception ex) 
            {
                return false;
            }
        }
        public async Task<bool> DeleteSample(int sampleId)
        {
            try
            {
                Sample sample = context.Samples.FirstOrDefault(q => q.SampleId == sampleId);
                if(sample != null)
                {
                    context.Samples.Remove(sample);
                    return await SaveChangesAsync();
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<SampleHistory>> GetSampleHistories()
        {
            try
            {
                return await context.SampleHistories
                    .OrderByDescending(q=>q.Date)
                    .Take(100)
                    .ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
    }
}
