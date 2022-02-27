let mainPic = document.querySelector("#mainImg");
let subPic = document.querySelectorAll(".sub");

let curPos = 0;
let postion = 0;
const IMAGE_HEIGT = 150;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const images = document.querySelector("#sub");



function prev() {
    if (curPos > 0) {
        nextBtn.removeAttribute("disabled")
        postion += IMAGE_HEIGT;
        images.style.transform = `translateY(${postion}px)`;
        curPos = curPos - 1;
    }
    if (curPos == 0) {
        prevBtn.setAttribute('disabled', 'true')
    }
}
function next() {
    if (curPos < 1) {
        prevBtn.removeAttribute("disabled")
        postion -= IMAGE_HEIGT;
        images.style.transform = `translateY(${postion}px)`;
        curPos = curPos + 1;
    }
    if (curPos == 1) {
        nextBtn.setAttribute('disabled', 'true')
    }
}

function init() {
    prevBtn.setAttribute('disabled', 'true')
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
}

init();



for (var i = 0; i < subPic.length; i++) {
    // subPic[i].onclick = function (event) {
    //     mainPic.src = this.src;
    // }
    subPic[i].addEventListener("mouseover", function () {
        mainPic.src = this.src;
    })
}
