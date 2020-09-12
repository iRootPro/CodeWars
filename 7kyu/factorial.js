function factorial(n) {
    if (n < 0 || n > 12) throw new Error('Error')
    let mult = 1
    for (i = 1; i <= n; i++) {
        mult *= i
    }
    return mult
}