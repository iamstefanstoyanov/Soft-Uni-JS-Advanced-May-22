function extractText() {
    let items = Array.from(document.querySelectorAll('li'));
    let res = items.map(e => e.textContent).join('\n')
    document.getElementById('result').value = res
}