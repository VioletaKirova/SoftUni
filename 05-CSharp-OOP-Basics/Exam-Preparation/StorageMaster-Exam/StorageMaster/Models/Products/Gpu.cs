﻿using System;
using System.Collections.Generic;
using System.Text;

namespace StorageMaster.Models.Products
{
    public class Gpu : Product
    {
        private const double productWeight = 0.7;

        public Gpu(double price) 
            : base(price)
        {
            this.Weight = productWeight;
        }
    }
}
