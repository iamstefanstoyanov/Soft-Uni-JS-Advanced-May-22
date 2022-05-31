function deleteByEmail() {
    let value = document.querySelector('input[name="email"]').value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let found = false;
    for (let row of rows) {
        if (row.children[1].textContent == value) {
            let parent = row.parentNode;
            parent.removeChild(row)
            found = true;
        }
    }
    found ? document.getElementById('result').textContent = ' Deleted.' : document.getElementById('result').textContent = ' Not found.'
}