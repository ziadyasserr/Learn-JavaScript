/*start-task-1 
console.log(100 == "100"); 
console.log(100 != 1000); 
console.log(110 > 100 > 10 < 20); 
console.log(-10 == "-10"); 
console.log( -50 != +"-40"); 
console.log( typeOf 10  == typeOf -"-40"); 
console.log( "10" !== 10); 
console.log( 20 != false);*/

/*start-task-3
let a = 20;
let b = 30;
let c = 10;

console.log(a > b && a < c || a < b);
console.log(a != b > a > c); 
console.log(!(a > b) && !(a > b) && (a > c) && !(a < c));*/





/*start-task-1
let num = 10;
if(num < 10){
    console.log(`+"00"${num}`);
}
else if(num > 10 && num <= 100){
    console.log(`0${num}`);
}
else{
    console.log(num);
}*/

/*start-task-3
let num1 = 10;
let num2 = 30;
let num3 = "30";

if(((num3 > num1) && (num3 !== num2)) && ((num3 > num1) && (num3 == num2)) && ((num3 !== num1) && (num3 !== num2))){

console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number
30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number
${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}
`)
}*/

/*start-task-4
let num1 = 10;
let num2 = -1;
let num3 = 10;
let num4 = 42;

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}


if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}


if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}



if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}



if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}


if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}



if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}*/






/*start-task-1
let day = "   friday  ";
day=day.trim();
day=day.charAt(0).toUpperCase() + day.slice(1);




switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
    break;

    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
    break;

    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
    break;

    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
    break;
    default:
       console.log("Its Not A Valid Day");
}*/



