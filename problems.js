const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(sumZero([1, 2, 3, 4, 5, -4]))

// O(n^2)

const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars('Monday'))

//O(n^2)

const isPangram = (str) => {
    const allLettersObj = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,
    }

    for (let i = 0; i < str.lenght; i++) {
        let letter = str[i]
        letter = letter.toLowerCase()
        allLettersObj[letter]++
    }

    for (let key in allLettersObj) {
        if (allLettersObj[key] === 0) {
            return false
        }
    }
    return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//O(n)

const findLongestWord = (listOfWords) => {
    let winner = 0

    for (let i = 0; i < listOfWords.length; i++) {
        if (listOfWords[i].length > winner) {
            winner = listOfWords[i].length
        }
    }
    return winner
}

console.log(findLongestWord(['hi', 'hello']))

//O(n)