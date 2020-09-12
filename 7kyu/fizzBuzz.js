function fizzbuzz(n)
{
    const arr = []
    for (let i = 1; i <= n; i++)
    {
        switch (true) {
            case i % 3 ===0 && i % 5 === 0:
                arr.push('FizzBuzz')
                break
            case i % 3 === 0:
                arr.push('Fizz')
                break
            case i % 5 === 0:
                arr.push('Buzz')
                break
            default:
                arr.push(i)
        }
    }
    return arr
}