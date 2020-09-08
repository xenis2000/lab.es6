// let wm = new WeakMap();
// let myFun = function(){};

// wm.set(myFun, 0);

// let count = 0;
// for(let i=0; i < 10; i++) {
//     count = wm.get(myFun);
//     count++;
//     wm.set(myFun, count);
// }

// console.log(wm);

// function Area(height, width) {
//     this.height = height;
//     this.width = width;
// }
// Area.prototype.getArea = function() {
//     return this.height * this.width;
// }

const wm = new WeakMap();

function Area(height, width) {
    wm.set(this, {height, width});
}
Area.prototype.getArea = function() {
    const {height, width} = wm.get(this);
    return height * width;
}

let myArea = new Area(10, 20);
console.log(myArea.getArea());
console.log(myArea.height); // <- reault false

//WeakMap을 활용해서 private 변수 만들기

