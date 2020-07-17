/*
Take a number from a user and write a function which checks whether the number is 
even orodd. Assign the result to a variable and log that variable in the console.
*/

console.log('%c Question 1','color:green;font-size:20px');
let even_check = function (number) {
    if (number % 2 == 0)
        return true;
    else
        return false;
}

let input  = Number(prompt("Enter the number :"));

let flag = even_check(input);
if(flag)
    console.log(`The number entered is ${input} and Number is even`);
else
console.log(`The number entered is ${input} and Number is odd`);