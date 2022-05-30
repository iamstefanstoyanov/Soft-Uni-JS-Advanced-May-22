function subtract() {
    let x = document.getElementById('firstNumber').value;
    let y = document.getElementById('secondNumber').value;
    let res = document.getElementById('result');
    res.textContent = Number(x) - Number(y);
}