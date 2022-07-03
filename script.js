'use strict';
// MenuToggle
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
let main = document.querySelector('.main');

toggle.addEventListener('click', function(){
    navigation.classList.toggle('active')
    main.classList.toggle('active')
})

// add hovered class in selected list item
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover', activeLink)
);
