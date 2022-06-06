function info(...params) {
    let all = Array.from(params);
    let info = {};
    for (let el of all) {
        let type = typeof el
        console.log(`${type}: ${el}`);
        if (info[type] === undefined) {
            info[type] = 0;
        }
        info[type]++;
    }
    let res = Object.entries(info).sort((a, b) => {
        return b[1] - a[1]
    })
    for (let [type, count] of res) {
        console.log(`${type} = ${count}`)
    }
}
info('cat', 42, function() {
    console.log('Hello world!');
})