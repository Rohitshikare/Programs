/*
   By default access specifier is public in typescript
   By default access specifier is private in C++
   By default access specifier  is Default in Java
*/



class Arethmatic
{
   private iNo1 : number;
   private iNo2 : number;
   
   public constructor(A : number , B : number)
   {
      this.iNo1 = A;
      this.iNo2 = B;
   }
   
   public Addition() : number
   {
      let Ans : number = 0;
   
      Ans = this.iNo1 + this.iNo2;
   
      return Ans;
   }

   public Substraction() : number
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

