using ClassLibraryIronworksDB.Models;
using ClassLibraryIronworksDB.Others;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class LoggingRepository : BaseRepository
    {
        public LoggingRepository() : base()
        {

        }
        public LoggingRepository(IronworksContext ironworksContext) : base(ironworksContext)
        {

        }
        public async Task<LoggingModel> Login(string login,string password)
        {
            try
            {
                User loggedUser = context.Users
                    .Include(q=>q.Role)
                    .FirstOrDefault(u => u.Login == login && u.Password == password);
                if (loggedUser == null)
                {
                    return new LoggingModel
                    {
                        IsLogged = false,
                        IsLoggingError = true,
                        IsBlocked = false,
                    };
                }
                else
                {
                    List<Permission> permissions = context.RolePermissions.Include(q=>q.Permission).Where(q=>q.RoleId == loggedUser.RoleId).Select(q => q.Permission).ToList();
                    Role role = new Role
                    {
                        Name = loggedUser.Role?.Name,
                        RoleId = loggedUser.RoleId ?? 0
                    };
                    return new LoggingModel()
                    {
                        LoggedUserId = loggedUser.UserId,
                        IsBlocked = loggedUser.IsBlocked,
                        IsLogged = true,
                        IsLoggingError = loggedUser.IsBlocked,
                        IsResetPassword = loggedUser.Password == String.Empty,
                        Role = role,
                        Permissions = permissions,
                        Login = loggedUser.Login,
                        UserFullName = $"{loggedUser.FirstName} {loggedUser.LastName}"
                    };
                }
            }
            catch (Exception ex)
            {
                Trace.WriteLine(ex);
                return new LoggingModel
                {
                    IsLoggingError = true,
                    IsLogged = false,
                    IsBlocked = false
                };
            }
        }
    }
}
