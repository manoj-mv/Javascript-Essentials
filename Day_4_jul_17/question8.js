/*
Replace Function Expressions with arrow functions in the code below:

function ask(question,yes,no){
    if(confirm(question))
        yes();
    else
        no();
    )
}

ask(
    "Do you agree?",
    function() {  alert("you ageed.");},
    function() { alert("You canceled the execution."); }
)

*/
console.log('%c Question 8','color:green;font-size:20px');

let ask = (question,yes,no) => {
    (confirm(question)) ? yes() : no() ;
}

ask(
    "Do you agree?",
    () => {alert("you agreed");},
    () => {alert('You canceled the execution');}
)