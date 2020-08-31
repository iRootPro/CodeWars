// Implement a function that receives two IPv4 addresses, and returns the number
// of addresses between them (including the first one, excluding the last one).
//
// All inputs will be valid IPv4 addresses in the form of strings.
// The last address will always be greater than the first one.

function countIP(ip) {
    ip.split('.').forEach((octet, index) => {

    })
}

function ipsBetween(start, end) {
    let startOctets = start.split('.')
    let endOctets = end.split('.')
    return (endOctets[0] - startOctets[0]) * 256 * 256 * 256 + (endOctets[1] - startOctets[1]) * 256 * 256 + (endOctets[2] - startOctets[2]) * 256 + (endOctets[3] - startOctets[3])

}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"))

