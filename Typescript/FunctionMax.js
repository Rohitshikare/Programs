var Week = [11, 21, 51, 10, 22];

var Max = 0;
var iCnt = 0;

for (iCnt = 0; iCnt < Week.length; iCnt++) {
    if (Max < Week[iCnt]) {
        Max = Week[iCnt];
    }
}
console.log("Maximum Number is : " + Max);
