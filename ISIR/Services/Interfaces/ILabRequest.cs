using ISIR.Models;

namespace ISIR.Services.Interfaces
{
    public interface ILabRequest
    {
        Task<IEnumerable<Dropdowndetails>> GetAllDropdownList(int UserId);
        Task<Dropdowndetails> Add(Dropdowndetails obj);
    }
}
