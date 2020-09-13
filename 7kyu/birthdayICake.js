function cake(x, y) {
    let sum = y.split('').reduce((acc, item, index) => {
        if ((index + 1) % 2 !== 0) return acc += item.charCodeAt()
        else {
           return  acc += item.charCodeAt(0) - 96
        }
    }, 0)
    console.log(sum)
    let fail = x * 0.7
    console.log(fail)
    return x * 0.7 > sum ? 'That was close!' : 'Fire!'
}
