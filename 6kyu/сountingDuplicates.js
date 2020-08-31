// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let count = 0
    console.log(new Set(text.toLowerCase().split('')))
    new Set(text.toLowerCase().split('')).forEach(char => {
        if (text.match(new RegExp(char, 'gi')).length > 1) count += 1
    })
    return count
}

console.log(duplicateCount('aabbcde'))
