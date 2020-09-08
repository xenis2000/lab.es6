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