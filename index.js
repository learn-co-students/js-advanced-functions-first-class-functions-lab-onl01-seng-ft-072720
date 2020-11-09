// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
        let newArray = [] 
        newArray.push(array[0])
        newArray.push(array[1])
        return newArray
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};


