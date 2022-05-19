function biggestHalf(arr) {
    return arr.sort((x, y) => x - y).slice(-Math.ceil(arr.length / 2))
}
console.log(biggestHalf([4, 7, 2, 5]))
console.log(biggestHalf([3, 19, 14, 7, 2, 19, 6]))