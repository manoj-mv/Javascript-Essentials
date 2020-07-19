/*
Make a Calculator in Javascript which can do operations as Addtion,
Subtraction, Multiplication, Division,Square root, Percentage.
*/

console.log('%c Question 4','color:green;font-size:20px')

//function totake two input
let two_num_input = () => {
    let num1= Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    return [num1,num2];
}


//single input
let single_num_input = ()=> {
    let num =prompt("Enter the number");
    return num;
}

//percentage inputs
let percentage_inputs = () => {
    let X = Number(prompt('Enter value X :'));
    let P = Number(prompt('Enter what % of X:'))
    return [X,P];
}
//let [num1,num2] = two_num_input();
//console.log(`num1: ${num1},num2 ${num2}`);

operator_val = parseInt(prompt(`Select operation to be performed:
    1.Addition
    2.Substraction
    3.Multiplication
    4.Division
    5.Square root
    6.Percentage`));
//console.log(operator_val);

let num1,num2;
switch(operator_val){
    case 1:
        [num1,num2] = two_num_input();
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        [num1,num2] = two_num_input();
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        [num1,num2] = two_num_input();
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 4:
        [num1,num2] = two_num_input();
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    case 5:
        let num = single_num_input();
        console.log(`\u221A${num} = ${Math.sqrt(num)}`);
        break;
    case 6:
        [num1,num2] = percentage_inputs();
        console.log(`${num2}% of ${num1} is ${(num1 * num2)/100}`);
        break;
    default:
        console.log('Invalid input.')
}