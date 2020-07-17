/*
Write a program to take marks as input from the user and grade him accordingly.
Use Conditional statements. Also implement using switch or ternary.
*/

console.log('\n\n');
console.log('%c Question 3','color:green;font-size:20px');

console.log('%c Using IF','color:blue');
//input =78;
input = Number(prompt('Enter your mark:'));
let grade = undefined;
if(input >=90)
    grade = 'A+';
else if(input >= 80)
    grade = 'A';
else if(input >= 70)
    grade = 'B+';
else if( input >= 60)
    grade = 'B';
else if( input >= 50)
    grade = 'C+';
else if( input >= 40 )
    grade = 'C';
else
    grade = 'F';

console.log(`Mark is ${input} and grade is ${grade}.\n`);


// Using switch
console.log('%c Using switch','color:blue');

//console.log(parseInt(input/10));
//input = Number(prompt('Enter your mark:'));
//console.log(input);
switch((input < 100) ? parseInt(input/10) : 100){
    case 100:
    case 9:
        grade = 'A+';
        break;
    case 8:
        grade = 'A';
        break;
    case 7:
        grade = 'B+';
        break;
    case 6:
        grade = 'B';
        break;
    case 5:
        grade = 'C+'
        break;
    case 4:
        grade = 'C';
        break;
    default:
        grade = 'F';
}

console.log(`Mark is ${input} and grade is ${grade}.\n`)



//Using ternary operator

console.log('%c Using switch','color:blue');

grade = (input >= 90) ? 'A+' : (input >= 80) ? 'A' : (input >= 70) ? 'B+':
        (input >= 60) ? 'B': (input >= 50) ? 'C+' : (input >= 40) ? 'C' : 'F';

console.log(`Mark is ${input} and grade is ${grade}.\n`)


