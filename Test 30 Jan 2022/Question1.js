//Question 1 : Write a programm to print the nth fibonacci number.

var input = prompt(" Enter the term of fibonacci ")
var input = parseInt(input)

if(isNaN(input)){
       alert("Enter a valid number.")
}
else if(input == 0){
       alert("Fibonacci("+input+") = 0")
}
else if(input == 1){
       alert("Fibonacci("+input+") = 1")
}
else{
       var a = 0
       var b = 1
       var temp

      for(var i = 2 ; i <= input ; i++){
           temp = a + b
           a = b
           b = temp
     }
     
     alert("Fibonacci("+input+") = " +temp)
}