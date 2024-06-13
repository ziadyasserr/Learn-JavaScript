/*start-task-1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num=3;

myFriends.pop();
console.log(myFriends);

myFriends.length=num;
console.log(myFriends);

console.log(myFriends.slice(0,3)); 
console.log(myFriends.splice(0,3));*/


/*start-task-2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends);*/


/*start-task-3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr=arrTwo.concat(arrOne).sort().reverse()
console.log(finalArr); */


/*start-task-4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); */


/*start-task-5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack[1] === needle) {
    console.log("Found")
}
if (haystack.includes(needle)) {
    console.log("Found")
}
if (haystack.indexOf(needle)) {
    console.log("Found")
}*/


/*start-task-6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=arr1.slice(2).concat(arr2.slice(2)).sort().join("").toLowerCase();
allArrs=arr1.concat(arr2).sort().join("").toLowerCase().slice(arr2.length);
console.log(allArrs);*/