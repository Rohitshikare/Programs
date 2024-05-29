
//if function dosen't return any thing
//This is positional parameter , in this parameter are depends on there sequence


function Demo(No1 : number , No2 : number) : void
{
   console.log("value of No1 : "+No1);
   console.log("value of No2 : "+No2); 
}

console.log("First line of Demo");

var A : number = 11;
var B : number = 10;
Demo(A,B);


function Multiplication(No1 : number ,No2 : number) : number
{
  let Ans : number  = 0;
  
  Ans = No1 * No2;
  
  return Ans;
}

var No1 : number = 10;
var No2 : number = 11;

var Ret = Multiplication(No1,No2);
console.log("Multiplication is : "+Ret);

/*
   
   Types of parameter

   position  parameter
   rest   parameter
   default  parameter
   optional  parameter
   
*/   
