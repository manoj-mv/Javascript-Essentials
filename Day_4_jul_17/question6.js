/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them
to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the
input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special
handling for a non-numeric input in this task.
*/

console.log('%c Question 6','color:green;font-size:20px');

while(true){
    let num1 = Number(prompt(`Enter a number > 100:
                        (Leave empty to quit)`));
    if(num1 == "")
        break;
    if(num1 <= 100){
        alert('number should > 100')
        continue;
    }
    else
        console.log(`Number is ${num1}`);
}

