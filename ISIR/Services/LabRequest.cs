using ISIR.Helpers;
using ISIR.Models;
using ISIR.Services.Interfaces;
using Newtonsoft.Json;

namespace ISIR.Services
{
    public class LabRequest : ILabRequest
    {
        private readonly HttpClient _client;
        public const string BasePath = "api/Home/";

        public LabRequest(HttpClient client)
        {
            _client = client ?? throw new ArgumentNullException(nameof(client));
        }
        public async Task<IEnumerable<Dropdowndetails>> GetAllDropdownList(int UserId)
        {           
            var path = $"{BasePath}GetAllDropdownList?UserId={UserId}";
            var response = await _client.GetAsync(path);
            
            return await response.ReadContentAsync<List<Dropdowndetails>>();
        }

        public async Task<Dropdowndetails> Add(Dropdowndetails obj)
        {
            var path = BasePath + "add";
            var response = await _client.PostAsJsonAsync(path, obj);

            var datastring = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<Dropdowndetails>(datastring);

            return result;
        }
    
    }
}
