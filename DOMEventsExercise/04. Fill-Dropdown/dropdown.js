function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let optionEl = document.createElement('option');
    optionEl.textContent = newItemText.value;
    optionEl.value = newItemValue.value;
    select.appendChild(optionEl);
    newItemText.value = '';
    newItemValue.value = '';
}