//Program to check if a number is multiple of 3 or not
let prompt =require('prompt-sync')();

let num = Number(prompt("Enter a number: "));
if (num % 3 == 0){
    console.log("Given number is a multiple of 3");
}
else
{
    console.log ("Given number is not a multiple of 3" )
}