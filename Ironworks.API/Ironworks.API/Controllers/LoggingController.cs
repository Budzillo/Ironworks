using ClassLibraryIronworksDB.Others;
using ClassLibraryIronworksDB.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Ironworks.API.Controllers
{
    [Route("api/logging")]
    [ApiController]
    public class LoggingController : ControllerBase
    {
        [EnableCors("IronworksOrigins")]
        [HttpGet("login/{login}&{password}")]
        public async Task<ActionResult<LoggingModel>> Login(string login,string password)
        {
            return Ok(await new LoggingRepository().Login(login,password));
        }
    }
}
