/*start-task-1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRg = (/(\d+\D+)+/g);

console.log(ip.match(ipRg));*/


/*start-task-2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRg = /\b(os)\d*(o)/ig;

console.log(specialNames.match(specialNamesRg));

Output
['Os10O', 'OsO', 'Os100O'] */


/*start-task-3
let phone = "+(995)-123 (4567)";
let phoneRg =/\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRg));*/


/*start-task-5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\s?(-|\/)?\s?\d{2}\s?(\/|-)?\s?\d{2,4}/g;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"  */


/*start-task-6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www)?(\.)?\w+\.\w+(:\d{4}\/\w+?.*)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));*/


// let form = document.querySelector("#register");
// let phone = document.querySelector("#phone");


// form.onsubmit=function () {
//     let input = phone.value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;       
//     // let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//     let valid = phoneRe.test(input);

//     if(valid === false)
//     {
//         return false ;
//     }
//     return true ;
// }


