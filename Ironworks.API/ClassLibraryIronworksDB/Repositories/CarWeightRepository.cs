using ClassLibraryIronworksDB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class CarWeightRepository : BaseRepository
    {
        public CarWeightRepository() : base()
        {

        }
        public CarWeightRepository(IronworksContext ironworksContext) : base(ironworksContext)
        {

        }
        public async Task<List<CarWeight>> GetCarWeights()
        {
            try
            {
                return await context.CarWeights.ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<List<CarWeightPosition>> GetCarWeightPositions()
        {
            try
            {
                return await context.CarWeightPositions
                    .Select(q=> new CarWeightPosition
                    {
                         AssortmentId = q.AssortmentId,
                         CarWeightId = q.CarWeightId,
                         CarWeightPositionId = q.CarWeightPositionId,
                         Contractor = q.Contractor,
                         ContractorId = q.ContractorId,
                         Customer = q.Customer,
                         Date = q.Date,
                         MassAssortmentNetto = q.MassAssortmentNetto,
                         MassNetto = q.MassNetto,
                         Netto = q.Netto,
                         Number = q.Number,
                         Operator = q.Operator,
                         Weight1Value = q.Weight1Value,
                         Weight2Value = q.Weight2Value,
                         ContractorName = q.Contractor.Name,
                         CarWeightName = q.CarWeight.Name,
                         AssortmentName = q.Assortment.Name
                    })
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<List<CarWeightPosition>> GetCarWeightPositions(DateTime dateStart,DateTime dateEnd,int carWeightId)
        {
            try
            {
                return await context.CarWeightPositions
                    .Select(q => new CarWeightPosition
                    {
                        AssortmentId = q.AssortmentId,
                        CarWeightId = q.CarWeightId,
                        CarWeightPositionId = q.CarWeightPositionId,
                        Contractor = q.Contractor,
                        ContractorId = q.ContractorId,
                        Customer = q.Customer,
                        Date = q.Date,
                        MassAssortmentNetto = q.MassAssortmentNetto,
                        MassNetto = q.MassNetto,
                        Netto = q.Netto,
                        Number = q.Number,
                        Operator = q.Operator,
                        Weight1Value = q.Weight1Value,
                        Weight2Value = q.Weight2Value,
                        ContractorName = q.Contractor.Name,
                        CarWeightName = q.CarWeight.Name,
                        AssortmentName = q.Assortment.Name
                    })
                    .Where(q=>q.Date >= dateStart && q.Date <= dateEnd && q.CarWeightId == carWeightId)
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
