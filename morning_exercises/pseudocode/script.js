//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
<<<<<<< HEAD
// - Find the cost of a small barrel:
//   - We know 1 small barrel costs 60 right off the bat
var smallBarrel = 60;
// - Find the cost of the large barrel:
//   - First find the cost of all large barrels
//     - To do that, grab the total cost (825)
var totalCost = 825;
//     - Subtract the small barrels from the total
var largeCost = totalCost - (smallBarrel * 2);
//       - calculate the small barrels total price (2 * 60 = 120)
//     - The remainder amount is the total cost of large barrels
var largeBarrel = largeCost / 5;
//     - Divide total cost of large barrels by number of barrels

return largeBarrel;
=======
>>>>>>> 1adf54b31b00325091a1e29b9748ceb6834df5ee
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
// 	- Find the distance of the earth circumference in miles
var cirOfEarth = 24901;
// - Calculate the # of gallons used to travel around the earth
var milesPerGallon = 12;
//   - circumference / MPG (miles per gallon)
gallonsUsed = cirOfEarth / milesPerGallon; 
// - Calculate the cost:
//   - total gallons used * cost of fuel
totalCost = gallonsUsed * 3;
return totalCost;
  //your code here
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(costcoGal, costcoPercent, kirklandGal, kirklandPercent){
//    Find the total amount of pure fruit juice (gal)
//   - Total of Costco pure fruit juice:
 var costCo = (costcoPercent / 100) * costcoGal;
//     - percentage pure fruit juice * number of gallons
//   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
var kirkLand = (kirklandPercent / 100) * kirklandGal;
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
var totalPureFruitJuice = kirkLand + costCo;
return totalPureFruitJuice;
// - Find the total amount of juice (gal):
//   - Total of Costco juice + Total of Kirkland Juice

};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
