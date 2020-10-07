using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private ApplicationDbContext _context;
        public MovieController(ApplicationDbContext context) {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _context.Movies.ToArray();
        }
        [HttpGet("{id}")]
        public Movie GetMovie(int id) {
            return _context.Movies.FirstOrDefault(m => m.Id == id);
        } 
        [HttpPost]
        public Movie Post([FromBody]Movie movie)
        {       
            _context.Movies.Add(movie);
            _context.SaveChanges();
            return movie;
        }
    }
}
