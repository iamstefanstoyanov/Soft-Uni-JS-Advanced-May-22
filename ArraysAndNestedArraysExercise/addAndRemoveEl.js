function addAndRemoveEl(arr) {
    let res =[];
    for(let i = 0; i < arr.length; i++) {
        arr[i] === "add" ? res.push(i+1) : res.pop();
    }
    res.length <= 0 ? console.log('Empty') : res.forEach(x=>console.log(x));
}
addAndRemoveEl(['add', 
'add', 
'add', 
'add']
)
addAndRemoveEl(['add', 
'add', 
'remove', 
'add', 
'add']
)
addAndRemoveEl(['remove', 
'remove', 
'remove']
)
