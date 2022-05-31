function addItem() {
    let input = document.getElementById('newItemText').value;
    let newEl = document.createElement('li');
    newEl.textContent = input;
    document.getElementById('items').appendChild(newEl);
    document.getElementById('newItemText').value = '';
}