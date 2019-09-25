﻿using _06_BirthdayCelebrations.Contracts;

namespace _06_BirthdayCelebrations
{
    public class Pet : IBirthable
    {
        public Pet(string name, string birthdate)
        {
            Name = name;
            Birthdate = birthdate;
        }

        public string Name { get; private set; }
        public string Birthdate { get; private set; }
    }
}
