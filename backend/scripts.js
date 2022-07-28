var number = "Hello World"; //String
var classRoom = ["Johanna", "jens", "Victory", "Lidia", "Michael", "Eve", "Tapiwa", "Sören", "Trang"];
var numbers = [1, 2, 4, 5]; //Integers Array
var sign = "$"; //char
var isRaining = false; //Boolean true/false
var weight = 57.11; //float comma Integer

console.log(classRoom[5] + " " + sign + " " + numbers[1])

let valueDisplayVar = document.querySelector(".valueDisplay");
let addValueBtn = document.querySelector(".addV");
let subValueBtn = document.querySelector(".subV");

let theDefaultValue = 0;

showValue(); //show the default value by calling the function first

addValueBtn.addEventListener("click", () => {
    //function body
    console.log("HELLO WORLD")
    theDefaultValue++;
    console.log(theDefaultValue);
    showValue();
});

subValueBtn.addEventListener("click", () => {
    //function body
    console.log("HELLO WORLD")
    theDefaultValue--;
    console.log(theDefaultValue);
    showValue();
});

/*
asking the html element to replace its content with the value from
theDefaultValue variable
*/
function showValue() {
    valueDisplayVar.innerHTML = theDefaultValue;
}

//Function to send Email from Input field
function sendMail() {
    window.location.href =
        "mailto:adiatwork@outlook.com" +
        "?cc=" +
        "&subject=" + encodeURIComponent("PlaceHolder Subject") +
        "&body=" + encodeURIComponent(document.querySelector(".form-control").value);
}
