let mySet = new Set();
console.log(toString.call(mySet));

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong"));

mySet.forEach(function(v){
    console.log(v);
});

mySet.delete("crong");
mySet.forEach(function(v){
    console.log(v);
});

//weakset
let arr = [1,2,3,4,];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
// ws.add(11);
// console.log(ws);
// result fale -> none object
let ws = new WeakSet();
ws.add(arr);
ws.add(arr2);
ws.add(obj);
console.log(ws);
arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
