var sum=0;
var number=456;
var temp=number;
while(temp>0){
    var reminder=temp%10;
    sum+=reminder* reminder*reminder;
    temp =(temp/10);
}
if (sum == number){
    console.log("is a armstrong");
}
else{
    console.log("is a not armstrong");
}