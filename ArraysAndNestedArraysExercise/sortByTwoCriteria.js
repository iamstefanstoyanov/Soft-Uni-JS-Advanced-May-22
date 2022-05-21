function sortArray(arr) {
    arr.sort(sortBy2Crit);
    arr.forEach(x => console.log(x));

    function sortBy2Crit(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
}
sort(['alpha',
    'beta',
    'gamma'
])
sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])
sort(['test',
    'Deny',
    'omen',
    'Default'
])