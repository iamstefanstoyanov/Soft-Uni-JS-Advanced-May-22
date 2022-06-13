function juiceFlavors(inputJuices) {
    let juices = {};
    let bottles = {};

    inputJuices.forEach(element => {
        let [name, quantity] = element.split(' => ');

        if (!juices[name]) {
            juices[name] = Number(quantity);
        } else {
            juices[name] += Number(quantity);
        }

        if (juices[name] >= 1000) {
            while (juices[name] >= 1000) {
                juices[name] -= 1000;
                if (!bottles[name]) {
                    bottles[name] = 1;
                } else {
                    bottles[name] += 1;
                }
            }
        }
    });

    let result = [];
    for (const [key, value] of Object.entries(bottles)) {
        result.push(`${key} => ${value}`);
    }

    return result.join('\n');
}