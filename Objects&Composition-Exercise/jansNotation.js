function jansNotation(params) {
    let operations = {
        '+': (first, second) => first + second, 
        '-': (first, second) => first - second, 
        '*': (first, second) => first * second, 
        '/': (first, second) => first / second, 
    }

    let numbers = [];
    for (const item of params) {
        if (Number.isFinite(item)) {
            numbers.push(item);
        } else {
            if (numbers.length < 2) {
                return 'Error: not enough operands!';
            } else {
                let second = numbers.pop();
                let first = numbers.pop();
                numbers.push(operations[item](first, second));
            }
        }
    }
    
    return numbers.length > 1 
        ? 'Error: too many operands!'
        : numbers[0];
}

jansNotation([3,
    4,
    '+'
])

console.log('---------------')
jansNotation([5,
    3,
    4,
    '*',
    '-'
])

console.log('---------------')
jansNotation([7,
    33,
    8,
    '-'
])

console.log('---------------')
jansNotation([15,
    '/'
])

console.log('---------------')
jansNotation([31,
    2,
    '+',
    11,
    '/'
])
console.log('---------------')
jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'
])