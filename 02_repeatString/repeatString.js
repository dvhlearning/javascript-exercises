const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        let message = "";
        for (let index = 0; index < num; index++) {
            message += string;
        }
        return message;
    }
};

// Do not edit below this line
module.exports = repeatString;
