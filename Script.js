
// navigation
let btn = document.querySelector('#btn');
let menu = document.getElementById('menu');
let icon = document.querySelector('.fa-solid')

btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('fa-xmark')
})

// dropDown Menu
let linkDropMenu = document.querySelector('.link-drop');
let subMenu = document.querySelector('.sub-menu');

linkDropMenu.addEventListener('click', function(){
    linkDropMenu.classList.toggle('active')
    subMenu.classList.toggle('show')
})
