// Your task, is to create NxN multiplication table, of size provided in parameter.
//
// for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


multiplicationTable = function (size) {
    let result = []
    for (let i = 1; i <= size; i++) {
        result.push(i)
    }

    let newResult = []
    for (let i = 0; i < size; i++) {
        let arr = []
        for (let j = 0; j < size; j++) {
            arr.push(result[i] * result[j])
        }
        newResult.push(arr)
    }
    return newResult
}


console.log(multiplicationTable(3))
