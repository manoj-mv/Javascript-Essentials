/*
Write a program that will display the multiplication table of a number on the webpage in a proper
format. Take the input from the user.
Input - 5
Output - 5 x 1 = 5
5 x 2 = 10
and so on...
*/

console.log('%c Question 2','color:green;font-size:20px');

const num = Number(prompt('Enter the number:'));
console.log(num)
document.getElementById('show').innerHTML = `<br>Multiplication Table of ${num}`;
document.getElementById('mul_table').setAttribute('style','visibility:visible');
console.log(document.getElementById('mul_table').getAttribute('style'));
let disp_str='';
let handle2 = document.querySelector('#list');
for(let i=0; i< 10; i++){
     disp_str += `<dt> ${i+1} * ${num} = ${(i+1) * num}</dt>`;
}
console.log(disp_str);
document.getElementById('list').innerHTML = disp_str;



