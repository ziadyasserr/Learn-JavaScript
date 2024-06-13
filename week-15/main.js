/*start-task-1
let font = document.querySelector("#font")
let color = document.querySelector("#color")

font.onchange = function () {
    window.localStorage.setItem("font" ,font.value)
    document.body.style.fontSize = font.value; 
}

color.onchange = function() {
    window.localStorage.setItem("color",color.value)
    document.body.style.color = color.value
}

document.body.style.fontSize = window.localStorage.getItem("font")
document.body.style. color = window.localStorage.getItem("color")

color.value = window.localStorage.getItem("color")
font.value = window.localStorage.getItem("font") */


/*start-task-2
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let select = document.querySelector("#select")

one.oninput = function() {
    window.sessionStorage.setItem("one",one.value)
}

two.oninput = function() {
    window.sessionStorage.setItem("two",two.value)
}

three.oninput = function() {
    window.sessionStorage.setItem("three",three.value)
}

select.onchange = function() {
    window.sessionStorage.setItem("select",select.value)
}

one.value = window.sessionStorage.getItem("one")
two.value = window.sessionStorage.getItem("two")
three.value = window.sessionStorage.getItem("three")
select.value = window.sessionStorage.getItem("select")*/
