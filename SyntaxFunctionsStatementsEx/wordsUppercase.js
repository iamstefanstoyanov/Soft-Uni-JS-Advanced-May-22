function wordsUpperCase(str) {
    return str.match(/\w+/g).join(", ").toLocaleUpperCase()
}
console.log(wordsUpperCase('Hi, how are you?'))
console.log(wordsUpperCase('hello'))