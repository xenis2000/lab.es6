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
const healthObj = {
    showHealth : function() {
        console.log(" time : " + this.healthTime);
    }
}
const myHealth = Object.assign(Object.create(healthObj),{
    healthTime : "11:20",
    name : "crong"
});
console.log(myHealth);