function negativeOrPositive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        } else {
            newArr.unshift(arr[i]);
        }
    }
    for(let el of newArr) {
        console.log(el);
    }
}
negativeOrPositive([7, -2, 8, 9])
negativeOrPositive([3, -2, 0, -1])