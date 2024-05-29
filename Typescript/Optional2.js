//Optional Parameter 
/*
   Pi ? : number
   
   '?' is used to indicate that variable is Optional parameter
   and it's optional value should be defined inside function
   as
   
   if(Pi = undefined) //undefined is datatype
   {
      Pi = 3.14;
   }
   
*/
function AreaOfCircle(Radius, Pi) {
    if (Pi === void 0) { Pi = 3.14; }
    var Ans = 0;
    Ans = Pi * Radius * Radius;
    return Ans;
}
var Ret = 0;
Ret = AreaOfCircle(20.3, 3.14);
console.log("Area of Circle is : " + Ret);
Ret = AreaOfCircle(20.3);
console.log("Area of Circle is : " + Ret);
