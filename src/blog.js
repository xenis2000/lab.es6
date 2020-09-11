class Blog {
    constructor() {
        this.dataUrl = "/data/data.json";
        this.likedSet = new Set();
        this.setInitEle();
        this.registerEvents();
    }
    setInitEle() {
        this.blogList = document.querySelector(".blogList > ul");
    }
    setInitData(dataUrl) {
        this.getData(dataUrl, this.insertPosts.bind(this));
    }
    setDataUrl(url) {
        this.dataUrl = url;
    }
    getDataUrl() {
        return this.dataUrl;
    }
    registerEvents() {
        const startBtn = document.querySelector(".start");
        const dataUrl = this.getDataUrl();
        
        startBtn.addEventListener("click", () => {
            this.setInitData(dataUrl);
        });
        this.blogList.addEventListener("click", ({target}) => {
            const targetClassName = target.className;
            if(targetClassName !== "like" && targetClassName !== "unlike") return;
            
            const postTitle = target.previousElementSibling.textContent;
            //찜 취소 클릭 시
            if(targetClassName === "unlike") {
                target.className = "like";
                target.innerText = "찜하기";

                this.likedSet.delete(postTitle);
            } else {
                target.className = "unlike";
                target.innerText = "찜취소";

                this.likedSet.add(postTitle);
            }
            this.updateLikedList();

        });
    }
    initListArea() {
        const listView = document.querySelector(".blogList > ul");
        listView.innerHTML = "";
    }
    getData(dataUrl, fn) {
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText).body;
           //console.log(list);
            fn(list);
        });
        oReq.open("GET", dataUrl);
        oReq.send();
    }
    insertPosts(list) {
        //this.blogList.innerHTML = "";
        list.forEach((v) => {
            //debugger;
            this.blogList.innerHTML += `
            <li>
                <a href=${v.link}>${v.title}</a>
                <div class="like">찜하기</div>
            </li>
            `;
        });
    }
    updateLikedList() {
        const ul = document.querySelector(".like-list > ul");
        let likedSum = "";
        this.likedSet.forEach((v) => {
            //debugger;
            likedSum += `<li>${v}</li>`;
        });
        ul.innerHTML = likedSum;
    }

}

export default Blog;