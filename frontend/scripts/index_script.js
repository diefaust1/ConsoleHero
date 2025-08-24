const incrementButton = document.getElementById("increaseButton");
const saveButton = document.getElementById("saveButton");
const fetchButton = document.getElementById("fetchButton");
const number = document.getElementById("number");
let count = 0;

incrementButton.addEventListener("click", increaseNumber);
saveButton.addEventListener("click", save);
fetchButton.addEventListener("click", testFetch);

function testFetch(){
    console.log("fetch");
    fetch("http://localhost:4000", 
        {method: "GET"})
        .then(res => res.text())
        .then(data => console.log(data));
};


function increaseNumber() {
    count++;
    number.textContent = count;
};

function save() {
    console.log(count);
};