﻿namespace _08_MilitaryElite.Contracts
{
    public interface IRepair
    {
        string PartName { get; set; }
        int HoursWorked { get; set; }
    }
}