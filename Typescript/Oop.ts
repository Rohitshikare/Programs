// Class = Data + Function
// Class = Characteristic + Behaviour

class Student
{
   Name : string;
   Marks : number;
   Age : number;
   City : string;
   
   /*
     constructor is keyword in typescript
   */
   constructor(N : string, M : number, A : number, C : string)
   {
      console.log("\n* * * Inside Constructor * * *\n");
      this.Name = N;
      this.Age = A;
      this.Marks = M;
      this.City = C;
   }
   
   Display() : void
   {
      console.log("Name of student : "+this.Name);
      console.log("Age of student : "+this.Age);
      console.log("Marks of student : "+this.Marks);
      console.log("City of student : "+this.City);
   }
}

/*
  there is no concept of static object creation in typescript
*/

var obj = new Student("Rohit",8.38,20,"Alibag");
obj.Display();

var obj1 = new Student("Nihal",9.99,20,"Ghodegaon");
obj1.Display();





