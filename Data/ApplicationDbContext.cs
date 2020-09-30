using AutoMapper.Configuration;
using capstone.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace capstone.Data
{

    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public IConfiguration Configuration { get; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
        public ApplicationDbContext() : base(new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlite("Data Source=app.db").Options,null)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder) {
            builder.Entity<Movie>()
            .HasData( 
                new Movie { Id = 1, Title = "Tenet", Showtimes = "6:30,7:00,7:45,8:15", Description = "Time travel action adventure" },
                new Movie { Id = 2, Title = "Star Wars", Showtimes = "3:30,4:45,6:30,8:00", Description = "Epic space opera"}
            );
            base.OnModelCreating(builder);
        }
    }
}
