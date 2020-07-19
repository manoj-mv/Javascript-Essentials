/*
Create a for loop that iterates up to 100 while outputting "fizz" 
at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at 
multiples of 3 and 5.
*/

console.log('%c Question 1','color:green;font-size:20px')

for(let i = 1; i<=100;i++){
    if(i % 3 == 0){
        if(i%5 == 0)
            console.log(`${i} -> fizzbuzz`);
        else
            console.log(`${i} -> fizz`);
    }
    else if(i%5 == 0)
        console.log(`${i} -> buzz`)
}