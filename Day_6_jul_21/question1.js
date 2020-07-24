/*
Write a program that will iterate over an array of colors and 
change the background of the page after 5 seconds.
*/
console.log('%c Question 1','color:green;font-size:20px');

const color_arr = ['red','#a2d5c6','#039fbe', '#077b8a','#fbcbc9','#6b7b8c','green'];
const len = color_arr.length;
let i = 0;
function color_change(){
    let curr_color = color_arr[i++ % len];
    console.log(curr_color);
    document.bgColor = curr_color;
}

setInterval(color_change,5000);
