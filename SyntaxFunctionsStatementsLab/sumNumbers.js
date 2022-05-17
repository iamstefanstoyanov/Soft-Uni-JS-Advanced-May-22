function sumNum(x, y) {
    x = Number(x);
    y = Number(y);
    let res = 0;
    for (let i = x; i <= y; i++) {
        res += i;
    }
    console.log(res);
}

sumNum('1', '5')
sumNum('-8', '20')