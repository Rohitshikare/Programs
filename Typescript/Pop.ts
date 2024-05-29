function Addition(iNo1 : number , iNo2 : number) : number
{
   let Ans : number = 0;
   
   Ans = iNo1 + iNo2;
   
   return Ans;
}

function Substraction(iNo1 : number , iNo2 : number) : number
{
   let Ans : number = 0;
   
   Ans = iNo1 - iNo2;
   
   return Ans;
}

var Ret : number = 0;

Ret = Addition(10,11);
console.log("Addition is : "+Ret);

Ret = Substraction(20,11);
console.log("Substraction is : "+Ret);

