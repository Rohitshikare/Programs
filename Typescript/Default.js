function Percentage(Marks, Outof) {
    if (Outof === void 0) { Outof = 500; }
    var Ans = 0;
    Ans = Marks / Outof * 100;
    return Ans;
}
var Ret = 0;
Ret = Percentage(220, 300);
console.log("Percentage is : " + Ret + " %");
Ret = Percentage(220);
console.log("Percentage is : " + Ret + " %");
