/*start-task-1
let mix = [1,2,3,"E",4,"l","z","e",5,"r","o"];

let result = mix.map(function (ele) {
    return typeof ele === "number" ? ""  : ele;
})
.reduce(function (acc,current) {
    return `${acc}${current}`;
})

console.log(result); */


/*start-task-2
let myString = "EElllzzzzzzzeroo";

let result = myString.split("").filter(function (ele , index) {
    return ele !== myString[index+true];
}).join("");

console.log(result); */


/*start-task-3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce(function (acc,current) {
    return `${acc}${current}`
}).replace(",","")

console.log(result); */


/* start-task-4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter(function (ele) {
    return typeof ele === "number" ;
}).map(function (ele) {
    return -ele ;
})
console.log(result); */ 





/*start-task-5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function(acc,current) {
    return current % 2 === 0 ? acc * current  : acc + current ;
},1)

console.log(result) */