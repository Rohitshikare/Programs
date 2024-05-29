function Addition() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Sum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        Sum = Sum + Arr[iCnt];
    }
    return Sum;
}
var Ret = 0;
Ret = Addition(10, 20);
console.log("Addition is : " + Ret);
Ret = Addition(10, 20, 30);
console.log("Addition is : " + Ret);
Ret = Addition(10, 20, 30, 40, 50);
console.log("Addition is : " + Ret);
