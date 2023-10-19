let nav_icon = document.querySelector(".main_nav_icon");
let list = document.getElementById("main_list");

nav_icon.addEventListener("click",function (e) {
    if (e.target === nav_icon) {
        list.classList.toggle("active");
    }
})