let btnToggler = document.querySelector(".btn-toggler")
let sideMenu = document.querySelector(".side_menu")

btnToggler.addEventListener("click", function(){
    sideMenu.classList.toggle('active')
});