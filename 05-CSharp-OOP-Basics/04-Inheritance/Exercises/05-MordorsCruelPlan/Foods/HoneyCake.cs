﻿using System;
using System.Collections.Generic;
using System.Text;

namespace _05_MordorsCruelPlan.Foods
{
    public class HoneyCake : Food
    {
        private const int happiness = 5;

        public HoneyCake() :
            base(happiness)
        {
        }
    }
}
