function Cube()
{
var a,Cube;
a = parseInt(document.getElementById ("first").value);
//Formulae for Square and Cube
Cube = a*a*a;
document.getElementById ("num1").innerHTML ="Cube of "+a+" is : " +Cube;
}