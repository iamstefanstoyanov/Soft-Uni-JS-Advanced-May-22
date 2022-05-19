function evenPositionElement(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i += 2) {
        res += arr[i] + " ";
    }
    console.log(res);
}
evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])