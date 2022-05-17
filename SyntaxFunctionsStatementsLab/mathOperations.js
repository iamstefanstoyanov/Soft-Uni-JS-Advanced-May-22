function mathOperations(x, y, op) {
    let res = 0;
    switch (op) {
        case '+':
            res = x + y;
            break;
        case '-':
            res = x - y;
            break;
        case '*':
            res = x * y;
            break;
        case '/':
            res = x / y;
            break;
        case '%':
            res = x % y;
            break;
        case '**':
            res = x ** y;
            break;
    }
    console.log(res);
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')