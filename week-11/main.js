/*start-task-1
let member = {
    name : "Elzero" ,
    country : "Egypt" ,
    age : 38 ,
    fullDetails : function() {
        return `my name is  ${member.name}, my age is ${this.age}, i live in ${member.country}`;
    }
    
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt */


/*start-task-2
let objMethodOne ={
    property : "Method One",
};
console.log(objMethodOne.property); // "Method One"



let objMethodTwo = new Object();
objMethodTwo ={
    property : "Method Two",
}
console.log(objMethodTwo.property); // "Method Two"



let user = {
    property : "Method Three",
};
let objMethodThree = Object.create(user)
console.log(objMethodThree.property); // "Method Three"



let objMethodFour = Object.assign({},{property : "Method Four"})
console.log(objMethodFour.property); // "Method Four" */


/*start-task-3
let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

let finalObject = Object.assign({},{a},threeNums ,twoNums)

console.log(finalObject);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/



