/*start-task-1
function sayHello(theName, theGender="") {
    if (theGender === "Male") {
        theGender = "Mr";
    }
    else if(theGender === "Female"){
        theGender = "Miss";
    }
document.write(`<P>Hello ${theGender} ${theName}</p>`)
}
sayHello("Osama", "Male"); 
sayHello("Eman", "Female"); 
sayHello("Sameh");*/


/*start-task-2
function calculate(firstNum, secondNum, operation) {
    
    switch (operation) {
        case "add":
        console.log(firstNum + secondNum);
        break;

        case "subtract":
        console.log(firstNum - secondNum);
        break;

        case "multiply":
        console.log(firstNum * secondNum);
        break;

        case undefined:
        console.log(firstNum + secondNum);
        break;

        default:
            console.log(`second number not found`);
            
    }
}


  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600 */


/*start-task-3
function ageInTime(theAge) {
    if(theAge > 10 && theAge <110) {
        console.log(`    ${theAge} years
    ${theAge*12}month
    ${theAge*12*60}hours
    ${theAge*12*60*60}minute
    ${theAge*12*60*60*60}second`);
    }

    else{
        console.log("Age Out Of Range");
    }
}
ageInTime(9);
ageInTime(38); */


/*start-task-4
function checkStatus(a, b, c) {
    let name;
    let age;
    let hire;

    typeof a === "string" ?name = a : typeof a === "number" ? age = a : hire = a ;
    typeof b === "string" ? name = b : typeof b === "number" ? age = b : hire = b ;
    typeof c === "string" ? name = c : typeof c === "number" ? age = c : hire = c ;

    hire === true ? hire = " You Are Available For Hire" : hire= " You Are Not Available For Hire"

    document.write(`<P> "Hello ${name}, Your Age Is ${age}, ${hire}" </P>`)
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"  */


/*start-task-5
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let i = startYear ; i <= endYear ; i++){
        document.write(`<option value=${i}>${i} </option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);
*/


/*start-task-6
function multiply(...nums) {
    let sum = 1;
    for(let i = 0 ; i < nums.length ; i++){
        if(typeof nums[i] === "string"){
            continue;
        }
        else{
            sum*=parseInt(nums[i]);
            }
    }
    return sum;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000  */