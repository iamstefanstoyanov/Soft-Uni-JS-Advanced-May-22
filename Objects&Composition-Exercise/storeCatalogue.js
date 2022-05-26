function storeCatalogue(arr){
    let obj = {};
    for(let line of arr){
        let [product , price] = line.split(' : ');
        let letter = product[0];
        if(!obj.hasOwnProperty(letter)){
            obj[letter] = {};
        }
        obj[letter][product]=price;
    }
    let sortedLetters = Object.keys(obj).sort((a,b) => a.localeCompare(b));
    for(let letter of sortedLetters){
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b));
        for(let product of sortedProducts){
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);