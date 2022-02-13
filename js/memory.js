let mainPic = document.querySelector("#mainImg");
let subPic = document.querySelectorAll(".sub");
let alertbutton = document.querySelector("#alertButton");


for (var i = 0; i < subPic.length; i++) {
    // subPic[i].onclick = function (event) {
    //     mainPic.src = this.src;
    // }
    subPic[i].addEventListener("mouseover", function () {
        mainPic.src = this.src;
    })
}

alertbutton.addEventListener("click", function () {
    alert("안녕안녕훈");
})



