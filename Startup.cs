using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using System.Net.WebSockets;
using chat.Controllers;
using Microsoft.EntityFrameworkCore;

namespace chat
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           
            services.AddControllers();
            services.AddSpaStaticFiles(config => config.RootPath = "wwwroot");
            services.AddSingleton(typeof(OpenchatService), new OpenchatService());
            services.AddDbContext<ChatDbContext>(opt => opt.UseSqlServer
            (Configuration.GetConnectionString("ChatConnection")));
            services.AddScoped<ChatRepo,SqlServerChatRepo>();
             services.AddControllers().AddNewtonsoftJson();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapControllerRoute(
                name: "default",
                pattern: "api/{controller}/{id}");

            });

            app.UseWebSockets();
            app.Use(async (context, next) =>
            {
                if (context.Request.Path == "/ws")
                {
                    if (context.WebSockets.IsWebSocketRequest)
                    {
                        var socket = await context.WebSockets.AcceptWebSocketAsync();
                        var openchatService = (OpenchatService)app.ApplicationServices.GetService(typeof(OpenchatService));
                        await openchatService.AddUser(socket);
                        
                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
                else
                {
                    await next();
                }
            });
            app.UseSpa(config =>
            {
                config.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                    config.UseAngularCliServer("start");
                }
            });

        }
    }
}