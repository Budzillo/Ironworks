using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ironworks.API.Controllers
{
    [Route("api/furnace")]
    [ApiController]
    public class FurnaceController : ControllerBase
    {
        [EnableCors("IronworksOrigins")]
        [HttpGet("getFurnaces")]
        public async Task<ActionResult<List<Furnace>>> GetFurnaces()
        {
            return Ok(await new FurnaceRepository().GetFurnaces());
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveFurnace")]
        public async Task<ActionResult<bool>> SaveFurnace([FromBody] Furnace furnace)
        {
            bool result = await new FurnaceRepository().SaveFurnace(furnace);
            if (result) return Ok(result);
            else return BadRequest(result);    
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteFurnace/{furnaceId}")]
        public async Task<ActionResult<bool>> DeleteFurnace(int furnaceId)
        {
            bool result = await new FurnaceRepository().DeleteFurnace(furnaceId);
            if (result) return Ok(result);
            else return BadRequest(result);
        }

        [EnableCors("IronworksOrigins")]
        [HttpGet("getFurnaceTypes")]
        public async Task<ActionResult<List<FurnaceType>>> GetFurnaceTypes()
        {
            return Ok(await new FurnaceRepository().GetFurnaceTypes());
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteFurnaceType/{furnaceTypeId}")]
        public async Task<ActionResult<bool>> DeleteFurnaceType(int furnaceTypeId)
        {
            bool result = await new FurnaceRepository().DeleteFurnaceType(furnaceTypeId);
            if (result) return Ok(result);
            else return BadRequest(result);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveFurnaceType")]
        public async Task<ActionResult<bool>> SaveFurnaceKind([FromBody] FurnaceType furnaceType)
        {
            bool result = await new FurnaceRepository().SaveFurnaceType(furnaceType);
            if (result) return Ok(result);
            else return BadRequest(result);
        }

        [EnableCors("IronworksOrigins")]
        [HttpGet("getFurnaceKinds")]
        public async Task<ActionResult<List<FurnaceKind>>> GetFurnaceKinds()
        {
            return Ok(await new FurnaceRepository().GetFurnaceKinds());
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteFurnaceKind")]
        public async Task<ActionResult<bool>> DeleteFurnaceKind(int furnaceKindId)
        {
            bool result = await new FurnaceRepository().DeleteFurnaceKind(furnaceKindId);
            if (result) return Ok(result);
            else return BadRequest(result);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveFurnaceKind")]
        public async Task<ActionResult<bool>> SaveFurnaceKind([FromBody]FurnaceKind furnaceKind)
        {
            bool result = await new FurnaceRepository().SaveFurnaceKind(furnaceKind);
            if (result) return Ok(result);
            else return BadRequest(result);
        }
    }
}
