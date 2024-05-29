function Addition(...Arr : number[]) : number
{
   let Sum : number = 0; 
   var iCnt : number  = 0;
   
   for(iCnt = 0 ; iCnt < Arr.length ; iCnt++)
   {
       Sum = Sum + Arr[iCnt];   
   }    
   
   return Sum;
}

var Ret : number = 0;

Ret = Addition(10,20);
console.log("Addition is : "+Ret);

Ret = Addition(10,20,30);
console.log("Addition is : "+Ret);

Ret = Addition(10,20,30,40,50);
console.log("Addition is : "+Ret);

