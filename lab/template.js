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