function calculator() {
    let firstElement;
    let secondElement;
    let resultElement;
    return {
        init: (selectorOne, selectorTwo, resultSelector) => {
            firstElement = document.querySelector(selectorOne);
            secondElement = document.querySelector(selectorTwo);
            resultElement = document.querySelector(resultSelector);
        },
        add: () => {
            resultElement.value = Number(firstElement.value) + Number(secondElement.value);
        },
        subtract: () => {
            resultElement.value = Number(firstElement.value) - Number(secondElement.value);
        },
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


let add = obj.add;
let subtract = obj.subtract;