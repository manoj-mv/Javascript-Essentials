/*
Write a program which does the following things:
1. Takes a positive number from the user.
2. Makes an array of numbers till the number given by user
3. Use higher order function to filter the odd numbers
4. Generate and array of the cubes of the filtered numbers
*/
console.log('%c Question 1','color:green;font-size:20px');


let arr_size = Number(prompt('Enter array size:'));
let arr = [];
for(let i=0;i<arr_size;i++)
    arr.push(parseInt(Math.random()*100));
console.log(arr);

let odd_arr = arr.filter((val) => (val%2 != 0));
let cube_arr = odd_arr.map((val)=> val ** 3);
console.log('printing array of odd nums...');
console.log(odd_arr);
console.log('printing cubes...');
console.log(cube_arr);
//console.log(arr.filter((val) => (val%2 != 0)).map((val)=> val ** 3));
