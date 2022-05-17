function circleArea(x) {
    let typeOfX = typeof (x)
    if (typeOfX === 'number') {
        let area = Math.PI*Math.pow(x,2) 
        console.log(area.toFixed(2))
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfX}.`)
    }
}
circleArea(5)
circleArea('name')