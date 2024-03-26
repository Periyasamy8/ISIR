using ISIR.Models;
using ISIR.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ISIR.Controllers
{
    public class WorkflowJSONController : Controller
    {
        private readonly ILabRequest _service;

        public WorkflowJSONController(ILabRequest service)
        {
            _service = service;
        }

        public async Task<JsonResult> GetAllDropdownList(int UserId)
        {
            var obj = await _service.GetAllDropdownList(UserId);

            return Json(obj);
        }

        public async Task<JsonResult> PostData([FromBody] Dropdowndetails lst)
        {
            var obj = await _service.Add(lst);
            
            return Json(obj); //change
        }
    }
}
