using ISIR.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ISIR.JSON_CLASS;
using System.Diagnostics;

namespace ISIR.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration Configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
        }

        public JsonResult PageLoadData()
        {
            UserDetails Users = new UserDetails();
            try
            {
                Users = HttpContext.Session.GetComplexData<UserDetails>("UserDetails");

                if (Users == null)
                    Users = new UserDetails();
                Users.Api = this.Configuration.GetSection("AppSettings")["Api"];  //not required
                //Users.Chartfilelink = Convert.ToString(ConfigurationManager.AppSettings["Chartfilelink"]);
            }
            catch (Exception ex)
            {
                ErrorLog.WriteToLog("Page Load Data " + ex.Message);
            }
            return Json(Users);
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        //[SessionExpire]
        public ActionResult CreateRequest()
        {
            //if (!string.IsNullOrEmpty(Convert.ToString(Session["UserName"])))
            //{
            return View();
            //}
            //else
            //{
            //    return Redirect(Convert.ToString(ConfigurationManager.AppSettings["Logout"]));
            //}
        }

        //[SessionExpire]
        public ActionResult LabTracker(string redirectto, string plantid)
        {
            //try
            //{
            //    UserDetails Users = new UserDetails();

            //    //if (string.IsNullOrEmpty(Convert.ToString(Session["UserName"])))
            //    if(true)
            //    {
            //        string email = HttpContext.Request.Query["email"].ToString(); //test
            //        string tokenval = HttpContext.Request.Query["token"].ToString();
            //        //bool pagevalidate = CheckToken(tokenval);
            //        bool pagevalidate = true;
            //        if (pagevalidate && email != null && email != "")
            //        {
            //            string token = tokenval;
            //            //Users = _web.GetUserDetails(email, token); //user check

            //            //test case User session
            //            Users = new UserDetails()
            //            {
            //                Access = 1,
            //                DeptName = "TA/QMI",
            //                LabName = "1,2,3,4",
            //                SubDeptName = "TA/QMI",
            //                UserAccess = "1,2,3,4,5",
            //                UserId = 118,
            //                UserName = "S, Sathish kumar (575)",
            //                UserType = "User"
            //            };

            //            if (Convert.ToBoolean(Users.Access))
            //            {
            //                Users.token = token;
            //                Users.language = HttpContext.Request.Query["ln"].ToString();
            //                HttpContext.Session.SetString("UserDetails", JsonConvert.SerializeObject(Users));
            //                HttpContext.Session.SetString("UserName", Users.UserName);
            //                HttpContext.Session.SetString("UserAccess", Users.UserAccess);
            //                HttpContext.Session.SetString("LabNames", Users.LabName);
            //                HttpContext.Session.SetString("UserType", Users.UserType);
            //            }
            //            else
            //            {
            //                return Redirect(this.Configuration.GetSection("AppSettings")["Logout"].ToString());
            //            }
            //        }
            //        else
            //        {
            //            return Redirect(this.Configuration.GetSection("AppSettings")["Logout"].ToString());
            //        }
            //    }
            //    else
            //    {
            //        try
            //        {
            //            Users = HttpContext.Session.GetComplexData<UserDetails>("UserDetails");
            //            if (Users == null)
            //                Users = new UserDetails();

            //            //Users.selectedplant = Convert.ToInt32(plantid);
            //            HttpContext.Session.SetComplexData("UserDetails", Users); //Update the UserDetails Session Here for Plant Master Dropdown Common Access
            //        }
            //        catch (Exception ex)
            //        {
            //            ErrorLog.WriteToLog("LabTracker" + ex.Message);
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    ErrorLog.WriteToLog("LabTracker " + ex.Message);
            //    return Redirect(this.Configuration.GetSection("AppSettings")["Logout"].ToString());
            //}

            return View();
        }
        
        [HttpPost]
        //[SessionExpire]
        public ActionResult CreateRequestPost(CreateRequestLab CreateRequest)
        {
            return Json(false);
            
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            });
        }
    }

    public static class SessionExtensions
    {
        public static T GetComplexData<T>(this ISession session, string key)
        {
            var data = session.GetString(key);
            if (data == null)
            {
                return default(T);
            }
            return JsonConvert.DeserializeObject<T>(data);
        }

        public static void SetComplexData(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }
    }
}