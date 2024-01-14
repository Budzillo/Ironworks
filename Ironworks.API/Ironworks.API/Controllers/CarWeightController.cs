using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ironworks.API.Controllers
{
    [Route("api/carWeight")]
    [ApiController]
    public class CarWeightController : ControllerBase
    {
        [EnableCors("IronworksOrigins")]
        [HttpGet("getCarWeights")]
        public async Task<ActionResult<List<CarWeight>>> GetCarWeights()
        {
            return Ok(await new CarWeightRepository().GetCarWeights());
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getCarWeightPositions")]
        public async Task<ActionResult<List<CarWeight>>> GetCarWeightPositions()
        {
            return Ok(await new CarWeightRepository().GetCarWeightPositions());
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getCarWeightPositions/{dateStart}&{dateEnd}&{carWeightId}")]
        public async Task<ActionResult<List<CarWeight>>> GetCarWeightPositions(DateTime dateStart,DateTime dateEnd,int carWeightId)
        {
            return Ok(await new CarWeightRepository().GetCarWeightPositions(dateStart,dateEnd,carWeightId));
        }
    }
}
