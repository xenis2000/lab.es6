// const name = "crong";
// const age = 33;

// const obj = {
//     name : name
//     ,age : age
// }

function getObj(){
    const name = "crong";
    const getName = function() {
        return name;
    }
    const setName= function(newName) {
        name = newname;
    }
    const printName = function() {
        console.log(name);
    }
    // return {
    //     getName : getName,
    //     setName : setName
    // }
    return { getName, setName, name }
}
let obj = getObj();
console.log(obj.getName() + ":" + obj.name);

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