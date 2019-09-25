function calcSumsByTown(arr) {
    let objects = arr.map(JSON.parse);
    let sums = [];
    for (let obj of objects) {
        if(obj.town in sums){
            sums[obj.town] += obj.income;
        }
        else{
            sums[obj.town] = obj.income;
        }
    }
    let sortedTowns = Object.keys(sums).sort();
    for (let town of sortedTowns) {
        console.log(`${town} -> ${sums[town]}`);
    }
}