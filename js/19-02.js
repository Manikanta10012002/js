// Task-1
function processNumbers(a,b,callback) {
    return(callback(a,b))

}
 var add = processNumbers(3,4,function(x,y){
    return(x+y)
    
    
})

console.log("Sum of two numbers is :",add);
// Task-2
function greet (callback){
    return(callback("Alice"))
}
var result = greet(function(name){
    return "Hello "+name+"!"
})
console.log(result)
// Task-3
function calculate (num1,num2,callback){
    return(callback(num1,num2))
}
var diff =calculate(10,5,function(x,y){
    return(x-y)
})
console.log("differnce is :",diff)