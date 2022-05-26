function heroicInventory(array) {
    let res = [];
    for (let el of array) {
        let [name, level, items] = el.split(' / ');
        level  = Number(level);
        items = items ? items.split(', ') : [];
        res.push({name, level, items});
    }
    console.log(JSON.stringify(res));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])