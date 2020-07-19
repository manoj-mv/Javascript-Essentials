/*
Imagine you are going out to do some grocery shopping.
So you have an array called shoppingList with all the 
products you want to buy.Now that you are inside of the 
shop, you have a basket with all the products from your 
list, but you want to add a few more.Create a new array 
called shoppingBasket, that will be a copy of the 
shoppingList array, and add some new products into it.
*/
console.log('%c Question 3','color:green;font-size:20px')

let shoppingList = ['Apple','Orange','salt','butter','vegetables'];

console.log(`shoppingList : ${shoppingList}`);

let shoppingBasket = [...shoppingList];

console.log(`shoppingBasket:${shoppingBasket}`);
console.log('adding ements............');
shoppingBasket.push('snacks','Rise','Oil','diary');
console.log(`shoppingBasket:${shoppingBasket}`);