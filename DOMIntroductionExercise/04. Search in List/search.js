function search() {
    let list = document.querySelectorAll('ul#towns li');
    let res = document.getElementById('result');
    let search = document.getElementById('searchText').value;
    let match = 0;
    for (let el of list) {
        el.style.fontWeight = 'normal';
        el.style.textDecoration = '';
    }
    for (let el of list) {
        let text = el.textContent;
        if (text.match(search)) {
            match++;
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
        }
    }
    res.textContent = `${match} matches found`;
}