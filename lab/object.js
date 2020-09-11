//ES6 이전 버전
function Health(name) {
    this.name = name;
}
Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요!");
}

const h = new Health("crong");
h.showHealth();

//ES6
class HealthX {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }
    showHealth() {
        console.log("Hi! " + this.name);
    }
}
const hx = new HealthX("crong");
hx.showHealth();

//Object assign Method
// const healthObj = {
//     showHealth : function() {
//         console.log(" time : " + this.healthTime);
//     }
// }
// const myHealth = Object.assign(Object.create(healthObj),{
//     healthTime : "11:20",
//     name : "crong"
// });
// console.log(myHealth);
const previousObj = {
    name : "crong",
    healthTime : "11:20"
};
const myHealth = Object.assign({}, previousObj, {
    healthTime : "12:30"
});

console.log(previousObj, myHealth);
console.log(previousObj === myHealth);

//mutable vs immutable
let x = [1,2,3,4]
let y = x
console.log(x, y);
console.log(x === y)
// true
//--------------- x 와 y 는 동일한 참조값으로 y는 x의 메모리를 참조한다.
y.push(6);
console.log(x, y);
console.log(x === y)

//setPrototypeOf
const funcHealthObj = {
    showHealth : function() {
        console.log("오늘의 운동시간 : " + this.healthTime);
    },
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
}
// const eleMyHealth = {
//     name : "crong",
//     lastTime : "11:20"
// };

const eleMyHealth = Object.setPrototypeOf({
    name : "crong",
    lastTime : "11:20"
}, funcHealthObj);
console.log(eleMyHealth);

//prototype chain
const funcHealthChildObj = {
    getAge : function() {
        return this.age;
    }
}
Object.setPrototypeOf(funcHealthChildObj, funcHealthObj);
const eleChildObj = Object.setPrototypeOf({
    age : 22
}, funcHealthChildObj);
console.log(eleChildObj);