/*start-task-3
let div =document.querySelector(".our-element")

let p =document.querySelector("p")
p.remove();


let create1 = document.createElement("div");
div.before(create1);

let create2 = document.createElement("div");
div.after(create2);

create1.classList.add("start")
create2.classList.add("end")

create1.setAttribute("title","start Element")
create1.setAttribute("data-value","start ")
create1.textContent = ("Start")

create2.setAttribute("title","End Element")
create2.setAttribute("data-value","end")
create2.textContent = ("End");

/* <div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div> */


/*start-task-3-again
let div =document.querySelector(".our-element")

let start = div.cloneNode();
let end = div.cloneNode();

function addAtt(tybe,el) {
    tybe.className=el.toLowerCase();
    tybe.title =`${el} element`
    tybe.setAttribute("data-value",el)
    tybe.textContent = el;
}

addAtt(start,"Start")
addAtt(end,"End")

div.before(start);
div.after(end);  */


/*start-task-4
let div = document.querySelector("div")

console.log(div.lastChild.nodeValue.trim());  */


/*start-task-5
document.addEventListener("click",function (e) {    
    console.log(`this is ${e.target.localName}`);
}) */




