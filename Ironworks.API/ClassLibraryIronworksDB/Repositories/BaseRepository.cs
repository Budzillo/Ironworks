using ClassLibraryIronworksDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryIronworksDB.Repositories
{
    public class BaseRepository
    {
        public IronworksContext context = new IronworksContext();
        public BaseRepository()
        {

        }
        public BaseRepository(IronworksContext ironworksContext)
        {
            this.context = ironworksContext;
        }
        public bool SaveChanges()
        {
            try
            {
                return context.SaveChanges() != -1;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> SaveChangesAsync()
        {
            try
            {
                return await context.SaveChangesAsync() != -1;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
