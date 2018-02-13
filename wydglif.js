
  function sayHello(person) {
    var person = prompt("Please enter your name ");
      alert("Hi! " + person);
      alert("Your are awesome just like Wydglif, smile :)");
  }
function math(num1, num2, sign){
  var num1 = prompt("Enter a number");
  var sign = prompt("Enter a sign +, -, *, or / : ");
  var num2 = prompt("enter a 2nd number");

    if (sign == "-"){
      alert("The answe is "+(num1-num2));
    }
    if (sign== "+"){
      add=num1 - (-num2)
      alert("The answer is " + add)
    }
    if (sign=="*"){
      alert("The answer is " + num1*num2);
    }
    if (sign=="/"){
      alert("The answer is " + num1/num2);
    }
}
