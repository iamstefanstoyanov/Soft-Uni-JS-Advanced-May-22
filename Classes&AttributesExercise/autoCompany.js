function autoEngineeringCompany(inputCars) {
    let cars = {};

    inputCars.forEach(element => {
        let [brand, model, producedCars] = element.split(' | ');

        producedCars = Number(producedCars);

        if (!cars[brand]) {
            cars[brand] = [{ model, producedCars }];
        } else {

            if (cars[brand].some(c => c.model === model)) {
                let car = cars[brand].find(c => c.model === model);

                car.producedCars += producedCars;;
            } else {
                cars[brand].push({ model, producedCars });
            }
        }
    });
    
    let result = [];
    for (const [key, value] of Object.entries(cars)) {
        result.push(`${key}`);
        for (const car of value) {
            result.push(`###${car.model} -> ${car.producedCars}`);
        }
    }

    return result.join('\n');
}