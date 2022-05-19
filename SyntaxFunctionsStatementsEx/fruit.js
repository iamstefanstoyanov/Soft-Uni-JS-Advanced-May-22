function fruit(name,grams,price){
    let kg = grams/1000;
    let result = kg * price;
    console.log(`I need $${result.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${name}.`);
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
