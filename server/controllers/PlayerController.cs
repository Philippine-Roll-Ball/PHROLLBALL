

using Microsoft.AspNetCore.Mvc;
using server.Data;
namespace server;

[ApiController]
[Route("api/[controller]")]
public class PlayerController : ControllerBase {
    private readonly AppDbContext _playerContext;

    public PlayerController(AppDbContext playerContext)
    {
        _playerContext = playerContext;
    }
}