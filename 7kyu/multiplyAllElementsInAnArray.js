function multiplyAll(arr) {
    return function mult(x) {
        return arr.map(item => item * x)
    }
}