let button = document.getElementById("increaseButton");
let number = document.getElementById("number");
let count = 0;

button.addEventListener("click", increaseNumber)

function increaseNumber(){
    count++;
    number.textContent = count;
}