setTimeout(function(){
    console.log("settime-out");
}, 1000);

setTimeout(()=>{
    console.log("settime-out-arrow");
}, 1000);

let newArr = [1,2,3,4].map(function(value, idex, object){
    return value * 2;
});
console.log(newArr);

let newArrArrow = [1,2,3,4].map((v)=>{
    return v * 2;
})
console.log(newArrArrow);

let newArrArrowX = [1,2,3,4].map( (v) => v * 2 );
console.log(newArrArrowX);

// this context of Arrow function
// const myObj = {
//     runTimeout() {
//         setTimeout(function(){
//             //console.log(this === window);
//             this.printData();
//         }, 200);
//     },
//     printData() {
//         console.log(" hi codesquad~");
//     }
// }
// myObj.runTimeout();
//result
//runtime error -> this 컨텍스가 가리키는 것은 window 객체 이므로 
//                 this context가 해당 객체를 가르키도록 bind 해줘야 한다.
// const myObj = {
//     runTimeout() {
//         setTimeout(function(){
//             this.printData();
//         }.bind(this), 200);
//     },
//     printData() {
//         console.log(" hi codesquad~");
//     }
// }
// myObj.runTimeout();
// arrow function을 이용하면 this context가 유지된다
const myObj = {
    runTimeout() {
        setTimeout(() => {
            this.printData();
        }, 200);
    },
    printData() {
        console.log(" hi codesquad~");
    }
}
myObj.runTimeout();

const el = document.querySelector("p");
const myObjX = {
    register() {
        el.addEventListener("click", (evt) => {
            this.printData(evt.target);
        });
    },
    printData(el) {
        console.log("clicked~~", el.innerText);
    }
}
myObjX.register();

//default parameters
function sum(value, size) {
    size = size || 3;
    return value * size;
}
console.log(sum(3));

function sumX(value, size=1) {
    return value * size;
}
function sumXX(value, size={value:1}) {
    return value * size.value;
}

//rest parameters;
//es6 이전 버전
function checkNum() {
    const argArray = Array.from(arguments);
    console.log(toString.call(argArray));
    const result = argArray.every((v) => typeof v === "number");
    console.log(result)
}
checkNum(10,2,3,5,"adf");
//es6
function checkNumx(...argArray) {
    console.log(toString.call(argArray));
    const result = argArray.every((v) => typeof v === "number");
    console.log(result)
}
checkNumx(10,2,3,5,"adf");