function validParentheses(parens) {
    const open = /\(/g
    const close = /\)/g
    const letter = parens.split('')
    let openCount = 0
    let closeCount = 0
    if (parens === '') return true
    if (parens.split('')[0] === ')') return false
    if (parens.split('')[-1] === '(') return false
    if (parens.match(open) == null || parens.match(close) == null ) return false
    if (parens.match(open).length !== parens.match(close).length) return false
    for (let i = 0; i< letter.length; i++) {
        if (letter[i] === '(') openCount += 1
        else openCount -= 1
        if (openCount < 0 ) return false
        //     letter[i] === '(' ?  openCount += 1 : closeCount += 1
        // // console.log(`open: ${openCount} close: ${closeCount}`)
        // if (openCount < closeCount) return false
    }
    return true

}

// || parens.split('').length > 100
let parens = ''
console.log(validParentheses(parens))
