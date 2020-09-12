function count(string) {
    return string.split('').reduce((acc, item) => {
        console.log(acc[item] || 0)
       return {...acc, [item] : (acc[item] || 0) + 1}
    }, {})
}
