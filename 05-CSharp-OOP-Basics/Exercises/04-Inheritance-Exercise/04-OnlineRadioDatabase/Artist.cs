﻿using System;
using System.Collections.Generic;
using System.Text;

namespace _04_OnlineRadioDatabase
{
    public class Artist
    {
        private string name;

        public Artist(string name)
        {
            this.Name = name;
        }

        public string Name
        {
            get { return name; }
            set
            {
                Validator.ValidateArtistName(value);

                name = value;
            }
        }
    }
}
