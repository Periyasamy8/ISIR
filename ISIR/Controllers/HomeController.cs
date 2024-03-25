using ISIR.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
                Users.Api = this.Configuration.GetSection("AppSettings")["Api"];
                //Users.Chartfilelink = Convert.ToString(ConfigurationManager.AppSettings["Chartfilelink"]);
            }
            catch (Exception ex)
            {
                ErrorLog.Log("Page Load Data " + ex.Message);
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

            //    if (string.IsNullOrEmpty(Convert.ToString(Session["UserName"])))
            //    {
            //        string email = Convert.ToString(Request.QueryString["email"]);
            //        string tokenval = Convert.ToString(Request.QueryString["token"]);
            //        bool pagevalidate = CheckToken(tokenval);
            //        if (pagevalidate && email != null && email != "")
            //        {
            //            WebServices _web = new WebServices();
            //            //string token = GenerateToken();
            //            string token = tokenval;
            //            Users = _web.GetUserDetails(email, token);
            
            //            if (Convert.ToBoolean(Users.Access))
            //            {
            //                Users.token = token;
            //                Users.language = Convert.ToString(Request.QueryString["ln"]);
            //                Session["UserDetails"] = Users;
            //                Session["UserName"] = Users.UserName;
            //                Session["UserAccess"] = Users.UserAccess;
            //                Session["LabNames"] = Users.LabName;
            //                Session["UserType"] = Users.UserType;
            //            }
            //            else
            //            {
            //                return Redirect(Convert.ToString(ConfigurationManager.AppSettings["Logout"]));
            //            }
            //        }
            //        else
            //        {
            //            return Redirect(Convert.ToString(ConfigurationManager.AppSettings["Logout"]));
            //        }
            //    }
            //    else
            //    {
            //        try
            //        {
            //            Users = (UserDetails)Session["UserDetails"];
            //            if (Users == null)
            //                Users = new UserDetails();

            //            //Users.selectedplant = Convert.ToInt32(plantid);
            //            Session["UserDetails"] = Users;//Update the UserDetails Session Here for Plant Master Dropdown Common Access
            //        }
            //        catch (Exception ex)
            //        {
            //            ErrorLog.Log("LabTracker" + ex.Message);
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    ErrorLog.Log("LabTracker " + ex.Message);
            //    return Redirect(Convert.ToString(ConfigurationManager.AppSettings["Logout"]));
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
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
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