function cityRecord(name, population, treasury) {
    let res = {};
    res.name = name;
    res.population = population;
    res.treasury = treasury;
    return res;
}
console.log(cityRecord('Tortuga',
    7000,
    15000
));
console.log(cityRecord('Santo Domingo',
    12000,
    23500

));