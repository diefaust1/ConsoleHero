const incrementButton = document.getElementById("increaseButton");
const saveButton = document.getElementById("saveButton");
const fetchButton = document.getElementById("fetchButton");
const number = document.getElementById("number");
let count = 0;

incrementButton.addEventListener("click", increaseNumber);
saveButton.addEventListener("click", save);

function increaseNumber() {
    count++;
    number.textContent = count;
};

function save() {
    console.log(count);
};