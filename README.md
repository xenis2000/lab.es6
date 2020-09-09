### Scope

- let
- const
    - const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
- immutable array

### Object

object return type

```jsx
reutrun { getName, setName, name }
```

## Destructuring

```jsx
//Destructuring Array
let data = ["crong", "honux", "jk", "jinny"];
let [jisu, , jung] = data;
console.log(jisu, jung);

//Destructuring Object
obj = {
    name : "crong",
    address : "seoul",
    age : 10
}
//let {name, age} = obj;
let {name:Xname, age:Xage} = obj;

console.log(Xname, Xage);

//Destructuring 활용한 JSON 파싱
var news = [
    {
        "title" : "sbs",
        "imgurl" : "https://sbs.co.kr/images/news.jpg",
        "newslist" : [
            "추미애 아들 비리 폭로",
            "추미애 또 다른 조국. 충격 20대 패닉",
            "문정권의 밎낯은 언제까지인가?"
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "https://imbc.co.kr/images/news.jpg",
        "newslist" : [
            "국민의힘 또 추미애 아들 비리로 물타기 ",
            "추미애발 조국 배끼기 - 기래기 ",
            "의대협 선발대 사건을 해명하라? 국민청원"
        ]
    }
]
//let [, mbc] = news;
let [, {title, imgurl, newslist:list}] = news;
list.map(function(value){
    console.log(value);
});

function getNewsList([,{newslist:list}]) {
    console.log(list);
}
getNewsList(news);

document.querySelector("div").addEventListener("click", function({target}){
    console.log(target.innerText);
});
// querySelector vs querySelectorAll
// querySelector -> reutnr object
// querySelector -> return node list
```

## Set & WeakSet

Set - 중복없이 유일한 값을 저장하려고 할때, 이미 존재하는지 체크할 때 유용함

```jsx
let mySet = new Set();
console.log(toString.call(mySet));
//[object Set]

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong"));
// return true

mySet.forEach(function(v){
    console.log(v);
});
// return crong hary
mySet.delete("crong");
mySet.forEach(function(v){
    console.log(v);
});
//return hary
```

weakset - 참조를 가지고 있는 객체만 저장이 가능하다. 즉 객체가 소멸할 경우 가비지 컬랙션 돼어 갱신 된다.

```jsx
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
```

## Map & WeakMap

Array → Set, WeakSet

Object → Map, WeakMap

Map 은 Key, Value 구조이다.

```jsx
let wm = new WeakMap();
let myFun = function(){};

wm.set(myFun, 0);

let count = 0;
for(let i=0; i < 10; i++) {
    count = wm.get(myFun);
    count++;
    wm.set(myFun, count);
}

console.log(wm);
```

```jsx
function Area(height, width) {
    this.height = height;
    this.width = width;
}
Area.prototype.getArea = function() {
    return this.height * this.width;
}

let myArea = new Area(10, 20);
console.log(myArea.getArea());
console.log(myArea.height);

//WeakMap을 활용해서 private 변수 만들기

```

## Template

```jsx
const data = [
    {
        name : "coffee-bean",
        order : true,
        items : ["americano", "milk", "green-tea"]
    },
    {
        name : "starbucks",
        order : false,
    }
]

const template = `<div>welcome ${data[0].name} !!`;
console.log(template);
```

Tagged template literals

```jsx
const data = [
    {
        name : "coffee-bean",
        order : true,
        items : ["americano", "milk", "green-tea"]
    },
    {
        name : "starbucks",
        order : false,
    },
    {
        name : "coffee-king",
        order : false,
        items : ["americano", "milk", "green-tea", "jinro"]
    }
]

// const template = `<div>welcome ${data[0].name} !!`;

function fn(tags, name, items) {
    //console.log(tags);
    if(typeof items === "undefined") {
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach(function(v){
    let template = fn`<div>welcome ${v.name} !!</div>
    <h2>주문가능항목</h2><div>${v.items}</div>`;
    
    document.querySelector("#message").innerHTML += template;
})
```

## Function

arrow function

```jsx
setTimeout(function(){
    console.log("settime-out");
}, 1000);

setTimeout(()=>{
    console.log("settime-out-arrow");
}, 1000);
```

```jsx
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
```

this context of Arrow function

> 서블릿은 누군가에 의해 한번 호출되어 로드되거나 혹은 서블릿엔진 시작시에 로드(load) 될 수 있습니다. 한번 로드된 서블릿은 메모리에 로드된 채 남아 있습니다. 이 때 또 다시 다른 사람에 의해 그 서블릿이 호출되면 file에서 다시 읽어들이는 것이 아니라 이미 로드된 서블릿을 사용하여 빠르게 응답하게 됩니다.

Context 란 용어는 어떤 한글번역본에는 "문맥"이란 용어로 직역됩니다만 사실 적절한 의미전달은 안되고 있습니다. C++ 언어에서 보면, Print을 하기 위해 PrintContext 객체를 사용하고, Java Applet에서 Applet의 AppletContext를 얻기 위해 Applet.getAppletContext()를 사용하지요. 

결국 "Context"란 "**어떤 객체를 핸들링하기 위한 접근 수단**"의 의미를 가집니다. 위에서 해당 서블릿을 수행하려면 "서블릿 Context"를 획득해야 그것을 통해 그 서블릿을 수행할 수 있는 것이지요.

```jsx
const myObj = {
    runTimeout() {
        setTimeout(function(){
            //console.log(this === window);
            this.printData();
        }, 200);
    },
    printData() {
        console.log(" hi codesquad~");
    }
}
myObj.runTimeout();
//result
//runtime error -> this 컨텍스가 가리키는 것은 window 객체 이므로 
//                 this context가 해당 객체를 가르키도록 bind 해줘야 한다.
```

```jsx
const myObj = {
    runTimeout() {
        setTimeout(function(){
            this.printData();
        }.bind(this), 200);
    },
    printData() {
        console.log(" hi codesquad~");
    }
}
```

arrow function 을 사용하면 this context 가 유지되어 별도의 bind 처리르 할 필요가 없다.

```jsx
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
```

default parmeters

```jsx
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
```

rest parameters

```jsx
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
```
