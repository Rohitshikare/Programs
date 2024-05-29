var Circle = /** @class */ (function () {
    function Circle(R) {
        this.Radius = R;
        this.Pi = 3.14;
    }
    Circle.prototype.Circumference = function () {
        var Ans = 0;
        Ans = this.Pi * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(10);
var Ret = 0;
Ret = obj.Circumference();
console.log("Circumference of circle is : " + Ret);
