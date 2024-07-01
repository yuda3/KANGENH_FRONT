const array = [1,2,3,4,5];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function log(val){
    console.log(val);
}

function double(val){
    val *= val;
    log(val);
}

forEach(array, double);