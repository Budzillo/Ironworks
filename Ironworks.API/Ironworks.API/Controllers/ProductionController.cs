using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ironworks.API.Controllers
{
    [Route("api/production")]
    [ApiController]
    public class ProductionController : ControllerBase
    {
        [EnableCors("IronworksOrigins")]
        [HttpGet("getProductions/{dateStart}&{dateEnd}")]
        public async Task<ActionResult<List<Production>>> GetProductions(DateTime dateStart, DateTime dateEnd)
        {
            return Ok(await new ProductionRepository().GetProductions(dateStart, dateEnd));
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteProduction/{productionId}")]
        public async Task<ActionResult<bool>> DeleteProduction(int productionId)
        {
            bool result = await new ProductionRepository().DeleteProduction(productionId);
            if (result)
                return Ok(true);
            else
                return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveProduction")]
        public async Task<ActionResult<bool>> SaveProduction([FromBody] Production production)
        {
            bool result = await new ProductionRepository().SaveProduction(production);
            if (result)
                return Ok(true);
            else
                return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getProductionHistories")]
        public async Task<ActionResult<List<ProductionHistory>>> GetProductionHistories()
        {
            return Ok(await new ProductionRepository().GetProductionHistories());
        }

    }
}
