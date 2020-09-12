function findDup(arr) {
    arr.sort((a, b) => a -b)
    let prev = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (prev === arr[i]) return prev
        prev = arr[i]
    }

}

console.log(findDup([3, 2, 1, 3]))

