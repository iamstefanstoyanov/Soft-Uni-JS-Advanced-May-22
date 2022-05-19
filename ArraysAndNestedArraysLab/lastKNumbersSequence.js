function lastKNumbersSequence(n, k) {
    let arr = [1]
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, v) => a + v, 0))
    }
    return arr
}
console.log(lastKNumbersSequence(6, 3))
console.log(lastKNumbersSequence(8, 2))