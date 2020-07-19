/*
Destructure the following object.

    const student = {
        name: "Helsinki",
        age:24,
        projects:{
            diceGame: "Two player dice game using javascript"
        }
    }

*/
console.log('%c Question 2','color:green;font-size:20px')

const student = {
    name: "Helsinki",
    age:24,
    projects:{
        diceGame: "Two player dice game using javascript"
    }
}

let {name,age,projects:{diceGame}} = student;

console.log(name);
console.log(age);
console.log(diceGame);