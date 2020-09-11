const myObj = {name : "crong", changeValue:0 }
const proxy = new Proxy(myObj, {
    // taget => myObj
    get : function(target, property, receiver) {
        console.log("get value");
        //return target[property];
        //return Reflector.get(target, property);
        return (property in target) ? target[property] : "anonymous";
    },
    // taget => myObj
    set : function(target, property, value) {
        console.log("set value");
        target["changeValue"]++;
        target[property] = value;
    }
})
console.log(proxy.name, myObj.name);
proxy.name = "xenislab";
console.log(proxy.name, myObj.name);
