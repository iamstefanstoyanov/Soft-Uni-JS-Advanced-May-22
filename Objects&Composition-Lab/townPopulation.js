function townPopulation(arr) {
    let result = {};
    for (let el of arr) {
        let [town , value] = el.split(' <-> ');
        if (!result.hasOwnProperty(town)) {
            result[town] = Number(value);
        }else{
            result[town] += Number(value);
        }
    }
    for(let el in result) {
        console.log(el + ' : ' + result[el]);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])