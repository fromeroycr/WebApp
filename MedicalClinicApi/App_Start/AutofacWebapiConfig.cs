
using Autofac;
using AutoFacWithWebAPI;
using Autofac.Integration.WebApi;
using MedicalClinicDataAccess.DAL;
using MedicalClinicRepositories.Implementations;
using MedicalClinicRepositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;

namespace AutoFacWithWebAPI.App_Start
{
    public class AutofacWebapiConfig
    {

        public static IContainer Container;

        public static void Initialize(HttpConfiguration config)
        {
            Initialize(config, RegisterServices(new ContainerBuilder()));
        }


        public static void Initialize(HttpConfiguration config, IContainer container)
        {
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

        private static IContainer RegisterServices(ContainerBuilder builder)
        {
            //Register your Web API controllers.  
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<MedicalClinicContext>()
                   .As<DbContext>()
                   .InstancePerRequest();
            
            builder.RegisterType<PatientsRepository>().As<IPatientsRepository>();            

            //Set the dependency resolver to be Autofac.  
            Container = builder.Build();
            
            return Container;
        }

    }
}