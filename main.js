 const menuBtn = document.querySelector('#bars-menu')
const menu = document.querySelector('.menu-open')

menuBtn.addEventListener('click', openMenu)


function openMenu(){
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}
 

