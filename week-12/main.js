/*start-task-1

console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name = js]"));
console.log(document.querySelector("div"));

console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name=js]")[0]);

console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.getElementsByTagName("div")[0]);

console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]); */


/*start-task-2

let logo = document.images;

for(let i = 0 ; i < logo.length ; i++){
    logo[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    logo[i].alt = "elzeroLogo";
    logo[i].style ="background-color:blue;margin-top:20px; padding:20px;"
} */



/*start-task-3

let input = document.querySelector("input")
let result = document.querySelector(".result")

input.oninput = function () {
    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`
} */



/*start-task-4

let divv1 = document.querySelector(".one")
let divv2 = document.querySelector(".two")

divv1.title = divv1.className;
divv2.title = divv2.className;

divv1.textContent = divv1.className;
divv2.textContent = `${(divv2.className).charAt(0).toUpperCase()}${(divv2.className).slice(1)} ${divv2.attributes.length}`;


console.log(divv1)  */


/*start-task-5
let logo = document.images;

for(let i = 0 ; i < logo.length ; i++){
    if(logo[i].hasAttribute("alt")){
        logo[i].alt = "Old"
    }
    else{
        logo[i].alt = "Elzero New";
    }
} */







