using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Ironworks.API.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [EnableCors("IronworksOrigins")]
        [HttpGet("getUsers")]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return Ok(await new UserRepository().GetUsers());
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("resetUserPassword/{userId}")]
        public async Task<ActionResult<bool>> ResetUserPassword(int userId)
        {
            bool result = await new UserRepository().ResetUserPassword(userId);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("blockUser/{userId}")]
        public async Task<ActionResult<bool>> BlockUser(int userId)
        {
            bool result = await new UserRepository().BlockUser(userId);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteUser/{userId}")]
        public async Task<ActionResult<bool>> DeleteUser(int userId)
        {
            bool result = await new UserRepository().RemoveUser(userId);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveUser")]
        public async Task<ActionResult<bool>> SaveUser([FromBody]User user)
        {
            bool result = await new UserRepository().SaveUser(user);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getPermissions")]
        public async Task<ActionResult<List<Permission>>> GetPermissions()
        {
            return Ok(await new UserRepository().GetPermissions());
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deletePermission/{permissionId}")]
        public async Task<ActionResult<bool>> DeletePermission(int permissionId)
        {
            bool result = await new UserRepository().RemovePermission(permissionId);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("savePermission")]
        public async Task<ActionResult<bool>> SavePermission([FromBody] Permission permission)
        {
            bool result = await new UserRepository().SavePermission(permission);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getRoles")]
        public async Task<ActionResult<List<Role>>> GetRoles()
        {
            return Ok(await new UserRepository().GetRoles());
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveRole")]
        public async Task<ActionResult<bool>> SaveRole([FromBody] Role role)
        {
            bool result = await new UserRepository().SaveRole(role);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }        
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteRole/{roleId}")]
        public async Task<ActionResult<bool>> DeleteRole(int roleId)
        {
            bool result = await new UserRepository().RemoveRole(roleId);
            if (result)
            {
                return Ok(true);
            }
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getRolePermissions/{roleId}")]
        public async Task<ActionResult<List<RolePermission>>> GetRolePermissionsByRole(int roleId)
        {
            return Ok(await new UserRepository().GetRolePermissionsByRole(roleId));
        }
        [EnableCors("IronworksOrigins")]
        [HttpGet("getDepartments")]
        public async Task<ActionResult<List<Department>>> GetDepartments()
        {
            return Ok(await new UserRepository().GetDepartments());
        }
        [EnableCors("IronworksOrigins")]
        [HttpDelete("deleteDepartment/{departmentId}")]
        public async Task<ActionResult<bool>> DeleteDepartment(int departmentId)
        {
            bool result = await new UserRepository().RemoveDepartment(departmentId);
            if (result) return Ok(true);
            else return BadRequest(false);
        }
        [EnableCors("IronworksOrigins")]
        [HttpPost("saveDepartment")]
        public async Task<ActionResult<bool>> SaveDepartment(Department department)
        {
            bool result = await new UserRepository().SaveDepartment(department);
            if (result) return Ok(true);
            else return BadRequest(false);
        }
    }
}
