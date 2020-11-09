// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const [first, second] = drivers 
    return [first, second]
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int){
    return function(fare){
        return fare*int
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, func){
    const [first, second] = selectingDrivers;
    return (func === first ? first(drivers) : second(drivers));
}