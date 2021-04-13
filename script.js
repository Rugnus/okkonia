let check = document.getElementById('menu-btn');

check.onclick = function() {
    var header = document.getElementById('header');
    header.classList.add('white')
}

if (check.checked == true ) {
    header.classList.add('white')
}