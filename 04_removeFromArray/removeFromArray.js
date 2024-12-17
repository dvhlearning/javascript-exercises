const removeFromArray = function(arr, ...removeArr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < removeArr.length; j++) {
            if (arr[i] === removeArr[j]){
                arr.splice(i,1);
                i--;
                console.log(arr);
            }
        }
    }
    return arr;
};

console.log(removeFromArray([1,2,3,4],3,2));

// Do not edit below this line
module.exports = removeFromArray;
