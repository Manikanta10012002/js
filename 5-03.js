// 1.	Create an Array
//Create an array with five numbers and print it.
 
var arr=[1,"mani",3,"nani","sweet"]
console.log(arr)

// 2.	Access an Element
//Given an array, print the third element.
var s=[1,2,3,5,9]
console.log(s[2])
//3.	Change an Element
//Modify the second element of an array to a new value.
var second=[1,"mani",3,5,6]
console.log(second)
second[1]="sai"
console.log(second)

// 4.	Find Length
//Write a function that returns the length of an array

var length=[1,2,"mani",3,4]
console.log(length.length)

//5.	Add an Element (Push)
//Add a new element to the end of an array.

var add=[1,2,3,4]
console.log(add)
console.log(add.push(5))
console.log(add)


//6.	Remove the Last Element (Pop)
//Remove the last element from an array and print the updated 

var remove=[1,2,3,4]
console.log(remove)
console.log(remove.pop(4))
console.log(remove)

// 7.	Loop Through an Array
//Use a loop to print each element of an array.

var loop=[1,2,3,4]
for(index=0;index<=loop.length-1;index++){
    console.log(loop[index])
}


// 8.	Check if an Element Exists
//Write a function to check if a given value exists in an array

function element(element,arr){
    if (arr.includes(element)){
        console.log("Exists")
    }
    else{
        console.log("not Existed")
    }
}
element(3,[1,3,4,5,"mani"])


// 9.	Copy an Array
//Create a copy of an array and print it.

var original=[1,2,3,4]
var copy=original
console.log(copy)

// 10.	Convert Array to String
//Convert an array to a string using .join() and print the result


var str1=[1,2,4,5]
console.log(str1.join(''))






