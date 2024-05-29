var Week : number[] = [11,21,51,101,111]

var Sum : number = 0;
var iCnt : number = 0;

for(iCnt = 0 ; iCnt < Week.length ; iCnt++)
{
   Sum = Sum + Week[iCnt];
}

console.log("Addition is : "+Sum);
