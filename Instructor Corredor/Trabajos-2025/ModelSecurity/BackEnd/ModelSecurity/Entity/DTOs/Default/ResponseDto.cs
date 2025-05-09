namespace Entity.DTOs.Default
{
    public class ResponseDto
    {
        public string Token { get; set; } = default!;
        public string UserName { get; set; } = default!;
        public string Role { get; set; } = default!;
        public int UserId { get; set; } = default!;
    }
}
