function speed(speed, area) {
    let speedLimit = 0;
    let isSpeeding = true;
    switch (area) {
        case "motorway":
            speedLimit = 130
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }
    if (speed <= speedLimit) {
        isSpeeding = false;
    }
    if(speed<0){
        speed=0;
    }
    if (!isSpeeding) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        let diff = speed - speedLimit;
        let status = "";
        if (diff <= 20) {
            status = "speeding";
        } else if (diff > 20 && diff <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }

}
speed(40, 'city')
speed(21, 'residential')
speed(120, 'interstate')
speed(200, 'motorway')
