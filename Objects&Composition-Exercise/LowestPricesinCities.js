function lowestPricesinCities(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let productIfno = text.split(' | ');
        let town = productIfno[0];
        let product = productIfno[1];
        let price = Number(productIfno[2]);
        if (!obj.hasOwnProperty(product)) {
            obj[product] = {
                town,
                price
            };
        } else {
            if ((price < obj[product].price)) {
                obj[product] = {
                    town,
                    price
                };
            }
        }
    }
    let productNames = Object.keys(obj);
    for(let i = 0; i < productNames.length; i++) {
        let productName = productNames[i];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
    }
}

lowestPricesinCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])