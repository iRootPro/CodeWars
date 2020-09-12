function mygcd(x,y){
    let dev = 1
    for (let i = 1; i <= y; i++) {
        if (x % i === 0 && y % i === 0) dev = i
    }
    return dev
}
