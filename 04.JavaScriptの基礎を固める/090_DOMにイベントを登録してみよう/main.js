let btn = document.querySelector('#btn');
let h1 = document.querySelector('h1');

function changeColor(){
    h1.style.color = 'red';
}
function changeBgColor(){
    h1.style.backgroundColor = 'green';
}
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

btn.onclick = changeColor;
