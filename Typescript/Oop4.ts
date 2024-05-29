class Circle
{
   Radius : number;
   Pi : number;
   
   constructor(R : number)
   {
      this.Radius = R;
      this.Pi = 3.14;
   }
   
   Circumference() : number
   {
      let Ans : number = 0 ;
      
      Ans = this.Pi * this.Radius * this.Radius;
      
      return Ans;
   }
}

var obj = new Circle(10);
var Ret : number = 0;
Ret = obj.Circumference();
console.log("Circumference of circle is : "+Ret);




