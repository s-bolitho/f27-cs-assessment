let array = [1, 2, 3, 4, 5, -5]

const sumZero = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] + array[j] === 0) { 
                return true
            } else {
                return false
            }
        }
    }
}

console.log(sumZero(array))

// O(n)

function makeUnique(str) {
    let uniqueStr = ''

    for (let i = 0; i < str.length; i++) {
        if (uniqueStr.includes(str[i])) {
            continue
        } else {
            uniqueStr += str[i]
        }
    }
    return uniqueStr
}

console.log(makeUnique('moonday'))

//O(1)

const isPangram = (str) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//O(n)

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

  //O(n^2)