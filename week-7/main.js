/*start-task-1
let start = 10;
let end = 100;
let exclude = 40;

for(let i = start ; i<=end ; i+=start){
    if(i === exclude){
        continue;
    }
    console.log(`${i}`);

}*/


/*start-task-2
let start = 10;
let end = 0;
let stop = 3;

for(let i = start; i>end ; i--){
    if(i<start){
        console.log(`0${i}`);
    }
    else {
        console.log(`${i}`);
    }
    if(i === stop){
        break;
    }
}*/


/*start-task-3
let start = 1;
let end = 6;
let breaker = 2;


for(let i = start ; i<=end ; i++){
    console.log(`${i}`);
    for(let x = breaker ; x < end ;x+=breaker){
        console.log(`-- ${x}`);
    }
}*/


/*start-task-4

let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    index-=jump;
if(index <= jump)
    break;
}*/


/*start-task-5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let number=letter.length;

for(let i = letter.length-1 ; i < friends.length ; i++ ){
    if(friends[i].charAt(0) === letter.toUpperCase()){
        continue;
    }
    console.log(` "${number} => ${friends[i]}" `);
    number++;

}*/


/*start-task-6
let start = 0;
let swappedName = "elZerO";
let result=" ";

for(let i = start ; i < swappedName.length ; i++ ){
    if(swappedName[i] === swappedName[i].toUpperCase()){
        result +=  swappedName[i].toLowerCase();
    }

    else{
    result+=swappedName[i].toUpperCase();
    }
}

console.log(result); */


/*start-task-7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i = ++start ; i < mix.length ; i++ ){
    if( typeof mix[i] === "string"){
        continue
    }
    console.log(mix[i]);
}*/


/*start-task-1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


while (index < friends.length) {
    if( typeof friends[index] === "number" || friends[index].startsWith("A")){
        index++;
        continue;
    }
    
    console.log(`${++counter} => ${friends[index]}`);
    index++
}*/




// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// for(let i = 0 ; i < friends.length ; i++){
//     if( typeof friends[i] === "number" || friends[i].startsWith("A")){
//         continue;
//     }
//     console.log(friends[i])
    
// }



















