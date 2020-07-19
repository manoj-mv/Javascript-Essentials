/*
You are managing a sales department for your company, you want 
to reward your employees based on the sales made by them during
the year.
The criteria is as follows:
    1.Sales from 0-5000 : 2%
    2.Sales from 5001 - 10000 : 5%
    3.Sales from 10001 - 20000 : 7%
    4.Above 20000 - 10%
Then log the total commission earned by him.
*/
console.log('%c Question 5','color:green;font-size:20px');

let commission_calc = (sales) => {
    if(sales <= 5000)
        return sales * 0.02;
    else if(sales <= 10000)
        return (sales - 5000) * 0.05 + (5000 * 0.02);
    else if(sales <= 20000)
        return ((sales - 10000) * 0.07 )+ (5000 * 0.05 )+ (5000 * 0.02);
    else if(sales > 20000)
        return (sales - 20000) * 0.1 + (10000 * 0.07) + (5000 * 0.05 )+ (5000 * 0.02);   
}
let sales =Number(prompt('Enter employee sales:'));
console.log(`sales = ${sales}`);
let reward = commission_calc(sales);
console.log(`Reward = ${reward}`);

