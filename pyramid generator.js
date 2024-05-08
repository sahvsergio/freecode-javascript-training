
//starting the pyramid project, by initalizing constants
const character="#";
const count=8;
const rows=[];
let result="";

//using for loops in javascript to build up the pyramid
//for (iterator;condition; iteration[
    //logic;
//]

//for ("interator", "condition","iteration" ){

//}

//   iterator declared; condition    iteration
for (let i=0;           i<count;      i=i+1){
//Your iteration statement will tell your loop what to do with the iterator after each run.
  console.log(i);
  rows.push(character.repeat(i)+1);
  
  console.log(resultt);
}

//a for...of loop, which iterates over each item 
//in an iterable object and temporarily assigns it to a variable.)

// example for of loop
//for (const value of iterable) {

for (const row of rows) {
  result=result+"\n"+row;
  //\n is an escape character

}
//functions in javascript
function padRow(){
  
}