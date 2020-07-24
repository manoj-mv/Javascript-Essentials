/*
Make a webpage that will ask the name of the user. Then will display a welcome
message on the webpage. Also the webpage should also have a clock.
Using the toggle method of classList add a dark mode feature to the website.
*/

console.log('%c Question 3','color:green;font-size:20px');

let name = prompt("Enter your name:")
console.log(name);
document.getElementById('show').innerHTML = `<h2>Welcome ${name}</h2>`;

let handle  =document.getElementById('clock');
function disp_clock(){
    const date =new Date();
    handle.innerHTML = date.toLocaleTimeString();
}
setInterval(disp_clock,1000);

let dk_mod_btn = document.getElementById('mode');
dk_mod_btn.onclick = ()=>{
    if(dk_mod_btn.value == 'on'){
        console.log(dk_mod_btn.value);
        dk_mod_btn.innerHTML = 'light mode';
        dk_mod_btn.value = 'off'
    }
    else{
        console.log(dk_mod_btn.value);
        dk_mod_btn.innerHTML = 'Dark mode';
        dk_mod_btn.value = 'on';
    }     
    document.body.classList.toggle('bgColor');
    console.log(dk_mod_btn.className);  
}

