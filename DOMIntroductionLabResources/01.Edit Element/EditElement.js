function editElement(el, match, replace) {
    let text = el.textContent;
    let pattern = new RegExp(match, 'g');
    let res = text.replace(pattern, replace);
    el.textContent = res;
}