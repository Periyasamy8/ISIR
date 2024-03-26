using System.Text.Json;

namespace ISIR.Helpers
{
    public static class HttpClientExtensions
    {
        public static async Task<T> ReadContentAsync<T>(this HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode == false)
                throw new ApplicationException($"Something went wrong calling the API: {response.ReasonPhrase}");
            try
            {
                var dataAsString = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
              
                var result = JsonSerializer.Deserialize<T>(
                    dataAsString, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
               

                return result;
            }
            
            catch (JsonException ex)
            {
                throw new ApplicationException("Error deserializing JSON response", ex);
            }
            
        }
    }
}
