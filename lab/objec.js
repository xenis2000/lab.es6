const name = "crong";
const age = 33;

const obj = {
    name : name
    ,age : age
}

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
    return {
        getName : getName,
        setName : setName
    }
}
var obj = getObj();
console.log(obj);