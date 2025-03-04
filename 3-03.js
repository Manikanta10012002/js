// Write a for loop to print numbers from 1 to 10.
function printNum(i){
    for (i=1;i<=10;i++){
        console.log(i)
    }
}
printNum()

// Write a for loop to calculate the sum of all numbers from 1 to 100.
function sumOffNum(a){
var count=0    
    for (a=1;a<=100;a++){
        count+=a
      
    }
    console.log(count)
}
sumOffNum()

//Write a for loop to print the multiplication table of 7 (up to 10).
function multication(num1,num){
    for (num=1;num<=10;num++){
        console.log(num1,"*",num,"=",num1*num)

    }
}
multication(7)

// Write a for loop to print all even numbers between 1 and 20.
function evenNumber(num){
    for(num=2;num<=20;num+=2){
        console.log(num)
    }
}
evenNumber()

// Write a for loop to calculate the factorial of a number (e.g., 5!).
function factorial(num){
var count= 1    
    for (a=1;a<=num;a++){
        count *= a

    }
    console.log (count)
}
factorial(5)

// Write a for loop to calculate the power of a number (e.g., 2^5).
function powerNumber (n,m){
var power=1
    for (i=1;i<=m;i++){
        power=power*n
    }
    console.log(power)

}
powerNumber(2,5)

    
//Write a for loop to print all odd numbers between 20 and 1 in reverse order.

function oddNum(num){
    for (num=19;num>=1;num -=2){
        console.log(num)

    }
}
oddNum()
