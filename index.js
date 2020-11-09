// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
} 

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = (array, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(array)
}