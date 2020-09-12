String.prototype.vowel = function() {

    if (this.length !== 1) return false
    return /[aoiue]/i.test(this)

};

console.log('a'.vowel())
