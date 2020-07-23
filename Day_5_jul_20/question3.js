/*
Using promises/async await/fetch get the random todos
from the json placeholder api. And log all the completed
todos to the console.
*/

console.log('%c Question 3','color:green;font-size:20px');

let data;
async function fetch_to_do(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.log(response);
    data = await response.json();
    // console.log(data);
    // data.filter()
    console.log('completed todos list:');
    for(obj of data){
        if(obj.completed === true)
            console.log(obj);
    }
}

fetch_to_do();
