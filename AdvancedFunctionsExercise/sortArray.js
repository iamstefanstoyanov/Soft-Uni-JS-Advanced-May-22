function sort(arr, key) {
    key == 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    return arr;
}
console.log(sort([14, 7, 17, 6, 8], 'asc'))
console.log(sort([14, 7, 17, 6, 8], 'desc'))