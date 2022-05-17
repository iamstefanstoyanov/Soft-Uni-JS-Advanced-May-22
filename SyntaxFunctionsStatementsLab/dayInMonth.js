function dayInMonth(month, year) {
    let dt = new Date(year, month);
    let mt = dt.getMonth();
    let ye = dt.getFullYear();
    let daysInMonth = new Date(ye, mt, 0).getDate();
    console.log(daysInMonth)
}
dayInMonth(1, 2012)
dayInMonth(2, 2021)