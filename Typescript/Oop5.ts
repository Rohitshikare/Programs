class Circle
{
   Radius : number;
   Pi : number;
   
   constructor(R : number)
   {
      this.Radius = R;
      this.Pi = 3.14;
   }
   
   CalculateArea() : number
   {
      let Ans : number = 0 ;
      
      Ans = this.Pi * this.Radius * this.Radius;
      
      return Ans;
   }
}

class CircleX extends Circle
{
   constructor(Data : number)
   {
      super(Data);
   }
   
   CalculateCircumference() : number
   {
      let Ans : number = 0;
      
      Ans = 2 * this.Pi * this.Radius;
      
      return Ans;
   }
}

var obj = new CircleX(10.7);
var Ret : number = 0;

Ret = obj.CalculateArea();
console.log("Area of circle is : "+Ret);

Ret = obj.CalculateCircumference();
console.log("Circumference of circle is : "+Ret);




