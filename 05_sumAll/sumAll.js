const sumAll = function(num1,num2) {
    if (!checkNum(num1) || !checkNum(num2)){
        return "ERROR";
    }
    let index = 0;
    let target = 0;

    if (num2 > num1) {
        index = num1;
        target = num2;
    } else {
        index = num2;
        target = num1;
    }
    
    let sum = 0;
    while (index <= target){
        sum += index;
        index++;
    }
    return sum;
};

function checkNum(num){
    if (Number.isInteger(num) && num > 0){
        return true;
    } else {
        return false;
    }
}

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;
