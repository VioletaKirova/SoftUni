﻿namespace BillsPaymentSystem.App.Core
{
    using System;
    using System.Linq;
    using System.Reflection;

    using Commands.Contracts;
    using Contracts;
    using Data;

    public class CommandInterpreter : ICommandInterpreter
    {
        private const string Suffix = "Command";

        public string Read(string[] args, BillsPaymentSystemContext context)
        {
            //Example input: UserDetails 1

            string command = args[0];
            string[] commandArgs = args.Skip(1).ToArray();

            var type = Assembly.GetCallingAssembly()
                .GetTypes()
                .FirstOrDefault(x => x.Name == command + Suffix);

            if (type == null)
            {
                throw new ArgumentNullException("Command not found!");
            }

            var typeInstance = Activator.CreateInstance(type, context);

            var result = ((ICommand)typeInstance).Execute(commandArgs);

            return result;
        }
    }
}
