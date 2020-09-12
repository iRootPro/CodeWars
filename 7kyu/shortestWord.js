function findShort(s){
    let length = s.split(' ')[0].length
    s.split(' ').forEach(w => {
        if (length > w.length) length = w.length
    })
    return length
}