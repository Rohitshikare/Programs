function Addition(iNo1, iNo2) {
    var Ans = 0;
    Ans = iNo1 + iNo2;
    return Ans;
}
function Substraction(iNo1, iNo2) {
    var Ans = 0;
    Ans = iNo1 - iNo2;
    return Ans;
}
var Ret = 0;
Ret = Addition(10, 11);
console.log("Addition is : " + Ret);
Ret = Substraction(20, 11);
console.log("Substraction is : " + Ret);
