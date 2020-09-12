function processArray(arr, callback) {
    return arr.map(item => callback(item))
}

let myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray,function (a) {
    return a * 2;
});

console.log(myArray)