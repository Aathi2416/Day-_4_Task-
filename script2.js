//Arrow Function

//A)Print odd numbers in an array

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
var OddNumbers = numbers.filter(i => i % 2 ==1)
console.log(OddNumbers);


//C)Sum of all numbers in an array 

var sum = (array)=>{
  var sum = 0;
       for(var i = 0 ; i< array.length ; i++){
          sum = sum + array[i];
        }
        console.log(sum);
        }
sum([1,2,3,4,5]);

//B)Convert all the strings to title caps in a string array

