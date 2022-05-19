function cooking(...params) {
    let n = Number(params.shift());
    while (params.length > 0) {
        let command = params.shift();
        switch (command) {
            case "chop":
                n = n / 2;
                break;
            case "dice":
                n = Math.sqrt(n);
                break;
            case "spice":
                n = n + 1;
                break;
            case "bake":
                n = n * 3;
                break;
            case "fillet":
                n = n - (n *0.2);
                break;
        }
        console.log(n);
    }
    
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')