function subset(arr) {
    let newArr = [];
    let biggest = 0;
    for(let i = 0; i < arr.length; i++) {
     let current = arr[i];
     if(biggest <= current) {
        biggest = current;
        newArr.push(current);
     }
    }
    return newArr;
}
subset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
])
subset([1,
    2,
    3,
    4
])
subset([20,
    3,
    2,
    15,
    6,
    1
])