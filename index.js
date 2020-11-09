// Code your solution in this file!
function returnFirstTwoDrivers(driver) {
   const a = function() {
       let array = []
      array.push(driver[0], driver[1])
      return array
   }
   return a()
}

function returnLastTwoDrivers(driver) {
    const a = function() {
        let array = driver.slice(-2)
       return array
    }
    return a()
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
    return function(fare) {
        return n * fare
    }
    return mult
}

let fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, funct) {
    return funct(drivers)
}