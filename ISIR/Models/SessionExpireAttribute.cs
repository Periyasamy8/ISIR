using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using Microsoft.Extensions.Configuration;
using ISIR.Controllers;


namespace ISIR.Models
{
    public class SessionExpireAttribute : ActionFilterAttribute
    {
        private readonly IConfiguration _configuration;
        public SessionExpireAttribute(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // check  sessions here
            //var test = filterContext.HttpContext
            //string Users = HttpContext.Current.Session["UserName"];
            //var Users = HttpContext.Session.GetComplexData<UserDetails>("UserDetails");

            //if (string.IsNullOrEmpty(Users))
            {
               // filterContext.Result = new RedirectResult(Convert.ToString(this._configuration.AppSettings["Logout"]));

                return;
            }
            base.OnActionExecuting(filterContext);
        }
    }
}
