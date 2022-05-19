function biggestElement(arr) {
    return arr.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), -Infinity)
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ))
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))
