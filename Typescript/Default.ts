
function Percentage(Marks : number , Outof : number = 500) : number
{
   let Ans : number = 0;
   
   Ans = Marks / Outof * 100;
   
   return Ans;
   
}

var Ret : number = 0;

Ret = Percentage(220,300);
console.log("Percentage is : "+Ret+ " %");

Ret = Percentage(220);
console.log("Percentage is : "+Ret+ " %");
