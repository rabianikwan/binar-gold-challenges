let array = [3, 2, 4]
let target = 6

function twoSums(array, target) {
    let result = [];
    for (let i = 0; i < array.length; i++ ) {
        let pivot = array.indexOf(target - array[i])
        if (pivot === i ) continue;
        if (pivot >= 0) return result = [array[i], array[pivot]]
    }
    if (result.length === 0) return "target not in range"
}

console.log(twoSums(array, target))

const palindrome = "sagas"

const isPalindrome = (string) => {
    let array = string.split("")
    for (let i = 0; i < array.length/2; i++) {
        let pivot = (array.length -1) - i;
        if (array[i] !== array[pivot]) return false
    }
    return true
}

console.log(isPalindrome(palindrome))
