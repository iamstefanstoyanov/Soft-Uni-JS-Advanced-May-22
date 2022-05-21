function print(arr, num) {
    let res = [];
    for(let i = 0; i < arr.length; i+=num) {
        res.push(arr[i]);
    }
    return res;
}
console.log(print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))
console.log(print(['dsa',
'asd', 
'test', 
'tset'], 
2
))
console.log(print(['1', 
'2',
'3', 
'4', 
'5'], 
6
))