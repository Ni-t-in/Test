//Question 2 : Write a program to print all prime numbers in range 1 to n.

var input = prompt("Enter the term till where you want to find prime number.")
var input = parseInt(input)
var array = []
var m = 0

if(isNaN(input)){
       alert("Enter a valid number")
}
else{
       for(var i = 2 ; i <= input; i++){
            var count = 0
            for(var j = 1 ; j <= i/2 ; j++){
                 if(i % j == 0 ){
                     count++
                 }
            }
            if(count ==1 ){
                 array[m] = i
                 m++
            }
       }
       alert("The prime numbers from 1 to "+input+" are : "+array)
}