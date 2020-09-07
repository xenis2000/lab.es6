let data = [1, 2, undefined, NaN, null, ""];

data.forEach(function(value){
    console.log(value);
});

Array.prototype.getIndex = function(){};

for(let idx in data) {
    console.log(data[idx]);
}

for(let value of data) {
    console.log(value);
}


//spread operator
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);
console.log(pre === newData);

let prex = [100, 200, "hello", null];
let newDatax = [0, 1, 2, 3, ...pre, 4];
console.log(newDatax);

function sum(a, b, c) {
    return a+b+c;
}

let prexx = [100, 200, 300];
console.log(sum.apply(null, prexx));
console.log(sum(...prexx));

function addMark() {
    let newData = [];
    for (let i=0; i<arguments.length;i++) {
        newData.push(arguments[i] + "!");
    }
    console.log(newData);
}
addMark(1, 2, 3, 4, 5);

function addMarkx() {
    let newArray = Array.from(arguments);
    let newData = newArray.map(function(value){});
    console.log(newData);
}
addMark(1, 2, 3, 4, 5);