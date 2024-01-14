using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.Repositories;
using ClassLibraryIronworksDB.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ironworks.API.Controllers
{
    [Route("api/sample")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        [EnableCors("IronworksOrigins")]
        [HttpGet("getAssortments")]
        public async Task<ActionResult<List<Assortment>>> GetAssortments()
        {
            return Ok(await new SampleRepository().GetAssortments());
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteAssortment/{assortmentId}")]
        public async Task<ActionResult<bool>> DeleteAssortment(int assortmentId)
        {
            bool result = await new SampleRepository().DeleteAssortment(assortmentId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveAssortment")]
        public async Task<ActionResult<bool>> SaveAssortment([FromBody] Assortment assortment)
        {
            bool result = await new SampleRepository().SaveAssortment(assortment);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getChemicalElements")]
        public async Task<ActionResult<List<ChemicalElement>>> GetChemicalElements()
        {
            return Ok(await new SampleRepository().GetChemicalElements());
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("insertChemicalElement")]
        public async Task<ActionResult<bool>> InsertChemicalElement([FromBody] ChemicalElement chemicalElement)
        {
            bool result = await new SampleRepository().InsertChemicalElement(chemicalElement);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("updateChemicalElement")]
        public async Task<ActionResult<bool>> UpdateChemicalElement([FromBody] ChemicalElement chemicalElement)
        {
            bool result = await new SampleRepository().UpdateChemicalElement(chemicalElement);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteChemicalElement/{chemicalElementId:int}")]
        public async Task<ActionResult<bool>> DeleteChemicalElement(int chemicalElementId)
        {
            bool result = await new SampleRepository().DeleteChemicalElement(chemicalElementId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getChemicalCompounds")]
        public async Task<ActionResult<List<ChemicalCompound>>> GetChemicalCompounds()
        {
            return Ok(await new SampleRepository().GetChemicalCompounds());
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("insertChemicalCompound")]
        public async Task<ActionResult<bool>> InsertChemicalCompound([FromBody] ChemicalCompound chemicalCompound)
        {
            bool result = await new SampleRepository().InsertChemicalCompound(chemicalCompound);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("updateChemicalCompound")]
        public async Task<ActionResult<bool>> UpdateChemicalCompound([FromBody] ChemicalCompound chemicalCompound)
        {
            bool result = await new SampleRepository().UpdateChemicalCompound(chemicalCompound);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteChemicalCompound/{chemicalCompoundId:int}")]
        public async Task<ActionResult<bool>> DeleteChemicalCompound(int chemicalCompoundId)
        {
            bool result = await new SampleRepository().DeleteChemicalCompound(chemicalCompoundId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getMaterials")]
        public async Task<ActionResult<List<Material>>> GetMaterials()
        {
            return Ok(await new SampleRepository().GetMaterials());
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getMaterialByGroups/{materialGroupIds}")]
        public async Task<ActionResult<List<Material>>> GetMaterialByGroups([FromHeader] List<int> materialGroupIds)
        {
            return Ok(await new SampleRepository().GetMaterialByGroups(materialGroupIds));
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveMaterial")]
        public async Task<ActionResult<bool>> SaveMaterial([FromBody] Material material)
        {
            bool result = await new SampleRepository().SaveMaterial(material);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteMaterial/{materialId:int}")]
        public async Task<ActionResult<bool>> DeleteMaterial(int materialId)
        {
            bool result = await new SampleRepository().DeleteMaterial(materialId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getMaterialGroups")]
        public async Task<ActionResult<List<MaterialGroup>>> GetMaterialGroups()
        {
            return Ok(await new SampleRepository().GetMaterialGroups());
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("isAnyMaterialConnectedWithMaterialGroup/{materialGroupId}")]
        public async Task<ActionResult<bool>> IsAnyMaterialConnectedWithMaterialGroup(int materialGroupId)
        {
            bool result = await new SampleRepository().IsAnyMaterialConnectedWithMaterialGroup(materialGroupId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveMaterialGroup")]
        public async Task<ActionResult<bool>> SaveMaterialGroup([FromBody] MaterialGroup materialGroup)
        {
            bool result = await new SampleRepository().SaveMaterialGroup(materialGroup);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteMaterialGroup/{materialGroupId:int}")]
        public async Task<ActionResult<bool>> DeleteMaterialGroup(int materialGroupId)
        {
            bool result = await new SampleRepository().DeleteMaterialGroup(materialGroupId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getViewSamples")]
        public async Task<ActionResult<List<ViewSample>>> GetViewSamples()
        {
            return Ok(await new SampleRepository().GetViewSamples());
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getViewSamplesByDate")]
        public async Task<ActionResult<List<ViewSample>>> GetViewSamples(DateTime dateStart, DateTime dateEnd)
        {
            return Ok(await new SampleRepository().GetViewSamplesByDate(dateStart, dateEnd));
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getSamples")]
        public async Task<ActionResult<List<Sample>>> GetSamples()
        {
            return Ok(await new SampleRepository().GetSamples());
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getSampleHistories")]
        public async Task<ActionResult<List<SampleHistory>>> GetSampleHistories()
        {
            return Ok(await new SampleRepository().GetSampleHistories());
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteSample/{sampleId}")]
        public async Task<ActionResult<bool>> DeleteSample(int sampleId)
        {
            bool result = await new SampleRepository().DeleteSample(sampleId);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveSample")]
        public async Task<ActionResult<bool>> SaveSample([FromBody] Sample sample)
        {
            //Pamiętać ze wględu na relację nalezy ją usunąć => mniej problemów.
            sample.Assortment = null;
            sample.Material = null;
            sample.User = null;
            sample.CarWeightPosition = null;
            bool result = await new SampleRepository().SaveSample(sample);
            if (result)
                return Ok(true);
            else return BadRequest(false);
        }
    }
}
