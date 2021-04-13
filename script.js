let check = document.getElementById('menu-btn');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

check.onclick = function() {
    var header = document.getElementById('header');
    header.classList.add('white')
};

next.onclick = function(e) {
    var item = document.getElementsByClassName('room__item');
    console.log(item);
    item[0].classList.add('item-hide');
    item[3].classList.remove('item-hide');   
    item[3].classList.add('room__item');   
}

prev.onclick = function(e) {
    var item = document.getElementsByClassName('room__item');
    console.log(item);
    item[3].classList.add('item-hide');
    item[0].classList.remove('item-hide');  
}



// next.addEventListener("click", function(e) {
//     var item = document.getElementsByClassName('room__item');
//     console.log(item);
//     item[0].classList.add('item-hide');
//     item[3].classList.add('item-show');   
// });
