﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_SumAdjacentEqualNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<double> nums = Console.ReadLine().Split(' ').Select(double.Parse).ToList();

            for (int i = 0; i < nums.Count - 1;)
            {
                if (nums[i] == nums[i + 1])
                {
                    nums[i] += nums[i + 1];
                    nums.RemoveAt(i + 1);

                    if (i > 0)
                    {
                        i--;
                    }
                }
                else
                {
                    i++;
                }
            }

            //With while loop:
            //int i = 0;
            //while (i < nums.Count - 1)
            //{
            //    if (nums[i] == nums[i + 1])
            //    {
            //        nums[i] += nums[i + 1];
            //        nums.RemoveAt(i + 1);
            //        if (i > 0)
            //        {
            //            i--;
            //        }
            //    }
            //    else
            //    {
            //        i++;
            //    }
            //}

            Console.WriteLine(string.Join(" ", nums));
        }
    }
}