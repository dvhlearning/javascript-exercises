const leapYears = function(year) {
    if (year % 4 === 0){
        console.log("divisible by four");
        if ((year % 100 === 0) && (year % 400 != 0)){
            console.log("divisible by 100 but NOT by 400");
            return false;
        }
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
