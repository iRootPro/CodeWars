function positiveSum(arr) {
    const sumArr = arr.filter(item => item > 0)
    if (sumArr.length === 0) return 0
    return sumArr.reduce((acc, item) => acc +=item)
}