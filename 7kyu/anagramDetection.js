const isAnagram = (test, original) => {

    return test.toLocaleLowerCase().split('').sort().join('') === original.toLocaleLowerCase().split('').sort().join('')
};

