function diagonalSums(arr) {
    let calcDiagonal = arr => arr.reduce((a, v, i) => a + v[i], 0)

    return `${calcDiagonal(arr)} ${calcDiagonal(arr.reverse())}`
}
console.log(diagonalSums([[20, 40],
    [10, 60]]
   ))
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ))