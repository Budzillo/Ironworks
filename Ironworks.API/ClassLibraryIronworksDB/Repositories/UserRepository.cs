using ClassLibraryIronworksDB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class UserRepository : BaseRepository
    {
        public UserRepository() : base() 
        {

        }
        public UserRepository(IronworksContext ironworksContext) : base(ironworksContext)
        {

        }
        public Task<List<User>> GetUsers() 
        {
            try
            {
                return context.Users.Select(q=>new User
                {
                    Email = q.Email,
                    FirstName = q.FirstName,
                    LastName = q.LastName,
                    FullName = $"{q.FirstName} {q.LastName}",
                    Login = q.Login,                    
                    DepartmentName = q.Department != null ? q.Department.Name : "BRAK",
                    RoleName = q.Role != null ? q.Role.Name : "BRAK",
                    UserId = q.UserId,
                    DepartmentId = q.DepartmentId,
                    RoleId = q.RoleId,
                    IsBlockedText = q.IsBlocked ? "Zablokowany" : "Odblokowany"
                }).OrderBy(q=>q.LastName).ToListAsync();
            }
            catch(Exception ex) 
            {
                return null;
            }
        }
        public async Task<bool> ResetUserPassword(int userId)
        {
            try
            {
                User user = context.Users.FirstOrDefault(q => q.UserId == userId);
                if (user != null)
                {
                    user.Password = String.Empty;
                    context.Users.Update(user);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> BlockUser(int userId)
        {
            try
            {
                User user = context.Users.FirstOrDefault(q => q.UserId == userId);
                if (user != null)
                {
                    user.IsBlocked = !user.IsBlocked;
                    context.Users.Update(user);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> RemoveUser(int userId)
        {
            try
            {
                User user = context.Users.FirstOrDefault(q => q.UserId == userId);
                if (user != null)
                {
                    context.Users.Remove(user);
                    return await SaveChangesAsync();
                }
                else return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> SaveUser(User user)
        {
            try
            {
                if (user.UserId == 0)
                    context.Users.Add(user);
                else 
                    context.Users.Update(user);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<Permission>> GetPermissions()
        {
            try
            {
                return await context.Permissions.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SavePermission(Permission permission)
        {
            try
            {
                if (permission.PermissionId == 0)
                    context.Permissions.Add(permission);
                else 
                    context.Permissions.Update(permission);
                return await SaveChangesAsync();
            }
            catch(Exception ex)
            {              
                return false;
            }
        }
        public async Task<bool> RemovePermission(int permissionId)
        {
            try
            {
                Permission permission = context.Permissions.FirstOrDefault(q=>q.PermissionId == permissionId);
                if (permission != null)
                {
                    context.Permissions.Remove(permission);
                    return await SaveChangesAsync();
                }
                else return false;  
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<Role>> GetRoles()
        {
            try
            {
                return await context.Roles
                    .Select(q => new Role
                    {
                        RoleId = q.RoleId,
                        Name = q.Name,
                        RolePermissions = q.RolePermissions.Select(t => new RolePermission
                        {
                            RoleId = t.RoleId,
                            PermissionId = t.PermissionId,
                            RolePermissionId = t.RolePermissionId,
                            PermissionName = t.Permission.Name,
                            RoleName = t.Role.Name,
                            Permission = t.Permission,
                            Role = t.Role
                        }).ToList()
                    })
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SaveRole(Role role)
        {
            try
            {
                Role roleInDb = context.Roles
                    .Include(q=>q.RolePermissions).ThenInclude(q=>q.Permission)
                    .FirstOrDefault(q => q.RoleId == role.RoleId);
                if(roleInDb != null)
                {
                    context.RolePermissions.RemoveRange(roleInDb.RolePermissions.Where(q => !role.RolePermissions.Select(t => t.PermissionId).Contains(q.PermissionId)));
                    foreach(RolePermission rolePermission in role.RolePermissions.Where(q=> !roleInDb.RolePermissions.Select(q => q.PermissionId).Contains(q.PermissionId)))
                    {
                        roleInDb.RolePermissions.Add(rolePermission);
                    }
                    roleInDb.Name = role.Name;
                }
                if (role.RoleId == 0)
                    context.Roles.Add(role);
                else 
                    context.Roles.Update(roleInDb);
                return await SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> RemoveRole(int roleId)
        {
            try
            {
                Role role = context.Roles.FirstOrDefault(q => q.RoleId == roleId);
                if (role != null)
                {
                    context.Roles.Remove(role);
                    return await SaveChangesAsync();
                }
                else return false;

            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<List<RolePermission>> GetRolePermissionsByRole(int roleId)
        {
            try
            {
                return await context.RolePermissions
                    .Where(q=>q.RoleId == roleId)
                    .Select(q=>new RolePermission
                    {
                        RoleId = q.RoleId,
                        PermissionId = q.PermissionId,
                        RoleName = q.Role.Name,
                        PermissionName = q.Permission.Name
                    })
                    .ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<List<Department>> GetDepartments()
        {
            try
            {
                return await context.Departments.ToListAsync();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
        public async Task<bool> SaveDepartment(Department department)
        {
            try
            {
                if (department.DepartmentId == 0)
                {
                    context.Departments.Add(department);
                }
                else context.Departments.Update(department);
                return await SaveChangesAsync();
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> RemoveDepartment(int departmentId)
        {
            try
            {
                Department department = context.Departments.FirstOrDefault(q => q.DepartmentId == departmentId);
                if(department != null)
                {
                    context.Departments.Remove(department);
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
