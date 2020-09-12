String.prototype.isLetter = function() {
    if (this.length > 1 || this.length === 0) return false
    return /[a-zA-Z]/.test(this)
}
console.log('a'.isLetter())