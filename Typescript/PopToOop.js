var Arethmatic = /** @class */ (function () {
    function Arethmatic(A, B) {
        this.iNo1 = A;
        this.iNo2 = B;
    }
    Arethmatic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.iNo1 + this.iNo2;
        return Ans;
    };
    Arethmatic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.iNo1 - this.iNo2;
        return Ans;
    };
    return Arethmatic;
}());
var obj = new Arethmatic(10, 11);
var Ret = 0;
Ret = obj.Addition();
console.log("Addition is : " + Ret);
Ret = obj.Substraction();
console.log("Substraction is : " + Ret);
