function processOddPositions(arr) {
    let newArr = [];
    for (let i = 1; i <= arr.length; i+=2) {
        newArr.push(arr[i] *2);
    }
    console.log(newArr.reverse().join(" "));
}
function processOddPositions(arr) {
    return arr
        .filter((_, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])