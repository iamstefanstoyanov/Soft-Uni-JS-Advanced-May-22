function attachEventsListeners() {
    let buttonConvert = document.getElementById('convert');
    buttonConvert.addEventListener('click', onClick)
    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onClick(e) {
        let fromValue = document.getElementById('inputUnits').value;
        let toValue = document.getElementById('outputUnits').value;
        let inputDist = Number(document.getElementById('inputDistance').value);
        let outputDist = document.getElementById('outputDistance');
        let valueInMeters = inputDist * units[fromValue];
        let convertedValue = valueInMeters / units[toValue];
        outputDist.value = convertedValue
    }
}