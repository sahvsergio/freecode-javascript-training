// variable initialization and assignment

//with let it can be reassgined
let character="Hello";
//printing the variable to the console
console.log(character);

character= 'World';
console.log(character);

//camel case is used in Javascript for  variables with more than 1 word
let secondCharacter;// the value withuot initialization is undefined
console.log(secondCharacter);
//reassinging value of the variable
secondCharacter= 'Test';

//assigning a previous variable to a variable
secondCharacter=character;

// assigning numbers to variables
let count=8;
// operations on numerical variables
console.log(count + 1);
console.log(count*3);
console.log(count/2);
console.log(count-2);

//Arrays:
// -they are declared using []
// variable with empty array

let rows= [];
// order of values 
rows=['Naomi',"Quincy","CamperChan"];
//accessing array elements by using numerical indexes
console.log(rows[0]);
//arrays are mutable, here is how you can mutate it 

//update the 3rd value of an array
rows[2]=10
//display the updated value to the console
console.log(rows)
//accessing the last element and find out length of the array

//.length is the method for the toal 
rows[rows.length-1]
//push a value at the end of the array
rows.push('freeCodeCamp');

//remove the element at the end of the array and return that element
let popped=rows.pop();
console.log(popped);

//what does the rows.push() return? .push() returns the new length of the array, after adding the value you give it.

let pushed=rows.push();
console.log(pushed);


//working with constants

//A const variable also cannot be uninitialized.this code would throw an error
const firstName;

const character = "Hello";
const count = 8;
const rows = [];






