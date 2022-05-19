function timeToWalk(steps, length, speed) {
    let distanceInMeters = steps * length;
    let metersPerSec = speed / 3.6;
    let time = distanceInMeters / metersPerSec;
    let rest = Math.floor(distanceInMeters / 500);
    let h = Math.floor(time / 3600);
    let m = Math.floor(time / 60);
    let s = Math.round(time - (m * 60));
    console.log((h < 10 ? "0" : "") + h + ":" + (m+rest <10? "0" : "") + (m + rest) + ":" + (s<10 ? "0" : "")+ s)
}
timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)