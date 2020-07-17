/*
Write a program which will take OS name and version from the user separated by 
a space.Then log the OS name and version on the console.
*/
console.log('\n\n');
console.log('%c Question 2','color:green;font-size:20px');
input = prompt("Enter OS name and version:");
//console.log(input);
let os_v = input.split(' ');
console.log(`The OS name is ${os_v[0]} and version is ${os_v[1]}`); 