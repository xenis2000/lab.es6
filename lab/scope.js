/*
const를 기본으로 사용하며
가변변수인 경우 let - let 하위 블럭 스코프 내에서 모두 적용
var 사용하지 않는다.
*/


// test code #1
// var list = document.querySelectorAll("li");
// for(let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function(){
//         console.log(i + "번째 리스트 입니다.");
//     });
// }


// test code #2
// function home() {
//     const homename = "sjhome";
//     //homename = "yjhome";
//     console.log(homename);
// }
// ///home();

// test code #3
// function homex() {
//     const list = ["applie", "orange", "watermelon"];

//     list.push("banana");
//     console.log(list);
// }
// //homex();

// Test code #4
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list === list2);
