/*
   Object oriented approach 
   to perform arethmatic operation
*/

class Arethmatic
{
   iNo1 : number;
   iNo2 : number;
   
   constructor(A : number , B : number)
   {
      this.iNo1 = A;
      this.iNo2 = B;
   }
   
   Addition() : number
   {
      let Ans : number = 0;
   
      Ans = this.iNo1 + this.iNo2;
   
      return Ans;
   }

   Substraction() : number
   {
      let Ans : number = 0;
   
   
      Ans = this.iNo1 - this.iNo2;
   
      return Ans;
   }
}   

var obj = new Arethmatic(10,11);
var Ret : number = 0;

Ret = obj.Addition();
console.log("Addition is : "+Ret);

Ret = obj.Substraction();
console.log("Substraction is : "+Ret);

