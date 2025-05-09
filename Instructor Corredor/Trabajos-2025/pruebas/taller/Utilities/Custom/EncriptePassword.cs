using System.Security.Cryptography;
using System.Text;

namespace Utilities.Custom
{
    public class EncriptePassword
    {

        public string EncripteSHA256(string text)
        {
            // Computar el hash 
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(text));

                //Convertir el array de byte a string 
                StringBuilder builder = new StringBuilder();

                for(int iterador = 0; iterador< bytes.Length; iterador++)
                {
                    builder.Append(bytes[iterador].ToString("x2"));
                }

                return builder.ToString();
            }

        }
    }
}
