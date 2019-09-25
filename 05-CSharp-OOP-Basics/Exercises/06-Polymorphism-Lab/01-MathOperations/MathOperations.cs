﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Operations
{
    public static class MathOperations
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }

        public static double Add(double a, double b, double c)
        {
            return a + b + c;
        }

        public static decimal Add(decimal a, decimal b, decimal c)
        {
            return a + b + c;
        }
    }
}
