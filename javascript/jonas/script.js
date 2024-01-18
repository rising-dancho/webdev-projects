//1.  UNDERSTANDING THE PROBLEM 
// - the array that is passed in contains maximum temparatures
// - thermometer displays a string with maximum temperatures
// - EXAMPLE: 
// [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

//2.  BREAKING UP INTO SUB-PROBLEMS 
// - Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
// - 

function printForecast(arr) {
  let day = 1;
  let forecastOutput= [];
  console.log(`
Weather Forecast: 
   `);
  for (let i = 0; i < arr.length; i++) {
    forecastOutput +=`... ${arr[i]}ºC in ${day} days `;
    day++;
  }
  return console.log(forecastOutput);
}

let tempData1 = [17, 21, 23];
let tempData2 = [12, 5, -5, 0, 4];

printForecast(tempData1);
printForecast(tempData2);
