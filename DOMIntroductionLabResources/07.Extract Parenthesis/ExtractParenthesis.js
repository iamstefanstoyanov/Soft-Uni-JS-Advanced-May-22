function extract(content) {
    let text = document.getElementById(content).textContent;
    let res = "";
    let pattern = /\((.+?)\)/g;
    let match = pattern.exec(text);
    while (match != null) {
        res += match[1] + "; "
        match = pattern.exec(text);
    }
    return res
}