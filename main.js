const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const para = document.querySelector('p');
const card = document.querySelector('.box-container .card-box');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    card.classList.toggle('active');
    para.classList.toggle('active');
}