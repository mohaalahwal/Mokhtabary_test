window.scrollbars.style = "display:none"
let scrol = document.querySelector(".scroler");
let scrol_hight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",function () {
    let scrolTop = document.documentElement.scrollTop;
    scrol.style.width = `${(scrolTop / scrol_hight) * 100}%`;
})