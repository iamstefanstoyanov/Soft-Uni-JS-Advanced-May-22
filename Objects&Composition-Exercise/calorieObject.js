function calorieObject(arr) {
    let res = {};
    for (let i = 0; i < arr.length; i += 2) {
        let prod = arr[i];
        let cal = arr[i+1];
        res[prod] = Number(cal);
    }
    console.log(res);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])