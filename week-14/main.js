/*start-task-1
let range = prompt("Print Number From - To","Example: 5-20").split("-").sort();
console.log(range);

for (let i = range[0]; i <= range[1]; i++)
{
    let num = document.createElement("div");
    num.textContent = i;
    document.body.append(num)
}*/


/*start-task-3
let div = document.querySelector("div");

function countdown () {
    div.innerHTML -= 1;
    if(div.innerHTML === "0"){
        clearInterval(printer);
    }
}
let printer = setInterval(countdown,1000) */



/*start-task-4
let div = document.querySelector("div");

function countdown () {
    div.innerHTML -= 1;
    if(div.innerHTML === "5"){
        window.open("https://www.google.com.eg/?hl=ar","","")
    }
}
let printer = setInterval(countdown,1000)*/


/*start-task-5
let mydiv = document.createElement("div");
document.body.append(mydiv);
mydiv.textContent = "10";


function countdown() {
    mydiv.innerHTML -=1 ;
    if(mydiv.innerHTML === "0"){
        clearInterval(printer);
    }
    if(mydiv.innerHTML === "5"){
        window.open("https://elzero.org/" , "" , "width = 400 , height = 400 , top = 10 , left = 20")
    }
}

let printer = setInterval(countdown , 1000) */










