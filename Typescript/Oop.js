"use strict";
exports.__esModule = true;
exports.Student = void 0;
// Class = Data + Function
// Class = Characteristic + Behaviour
var Student = /** @class */ (function () {
    /*
      constructor is keyword in typescript
    */
    function Student(N, M, A, C) {
        console.log("\n* * * Inside Constructor * * *\n");
        this.Name = N;
        this.Age = A;
        this.Marks = M;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student : " + this.Name);
        console.log("Age of student : " + this.Age);
        console.log("Marks of student : " + this.Marks);
        console.log("City of student : " + this.City);
    };
    return Student;
}());
exports.Student = Student;
var obj = new Student("Rohit", 8.38, 20, "Alibag");
obj.Display();
var obj1 = new Student("Nihal", 9.99, 20, "Ghodegaon");
obj1.Display();
