// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) { return drivers.slice(0, 2) }

const returnLastTwoDrivers = function(drivers) { return [drivers[2], drivers[3]] }
//const returnLastTwoDrivers = function(drivers) { return drivers.slice(drivers.length - 2) }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function(fare) { return x * fare }
}

let fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}