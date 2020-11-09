// Code your solution in this file!
 const returnFirstTwoDrivers = (array=[]) => (array.slice(0,2));

 const returnLastTwoDrivers = (array=[]) => (array.slice(array.length-2, array.length));

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(int) {
    return function(fare) {
        return fare*int;
    }
        //  ES6 version:
    //  const fareMultiplier = (fare) => (fare*int);
    //  return fareMultiplier;
 }

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(arrayOfDrivers, fn) {
     return fn(arrayOfDrivers)
 }