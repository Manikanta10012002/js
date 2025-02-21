//Task-1
// The function which does not have function keyword & function name and denoted by => is known as arrow function
// Arrow function are introduced in Es6, to increase the readability of anonymous function
// Arrow functions are shorthand property of anonymous function
// Arrow function syntax:
const add = (a, b) => a + b;
//Traditional function syntax :
const adds = function(a, b) {
    return a + b;
};


// Task-2
var x =(a,b)=> a+b
console.log(x(2,3))
// Task -3
var y= n =>{
    return n*n
}
console.log(y(6))
// Task-4
// when there is exactly one parameter syntax become shorter and easier to read
//syntax:
var z = a=> a*2
console.log(z(3))
// Task-5
// Concise Body with Implicit Return
// In this function is written in a single expression , and  the return keyword is ommited
var a= b=> b**3
console.log(a(9))
// Block Body with Explicit Return
//curely braces {} are used  to define a block body,and the return statement is explicity written
var b =c=> {
    return c**3
}
console.log(b(6))
// Task-6
var sub = (a,b) => {
    return b-a
}
console.log(sub(6,15))
// Task-7
var result = () => {
    return "Hello world!"
}
console.log(result())