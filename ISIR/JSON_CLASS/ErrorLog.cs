using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;
namespace ISIR.JSON_CLASS
{
    public class ErrorLog 
    {
        // Parameter Constructor       
        public static void WriteToLog(string text)
        {
            var path = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["Path"];

            string sTemp = path + DateTime.Now.ToString("dd_MM") + ".txt";
            using FileStream Fs = new FileStream(sTemp, FileMode.OpenOrCreate | FileMode.Append);

            StreamWriter st = new StreamWriter(Fs);
            string dttemp = DateTime.Now.ToString("[dd:MM:yyyy] [HH:mm:ss:ffff]");
            st.WriteLine(dttemp + "\t" + text);
            st.Close();

        }
    }
}