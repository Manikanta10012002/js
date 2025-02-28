function findLarger(num1,num2,callback){
    var result=callback(num1,num2)
    return result+5

}
var result = findLarger(12,20,(num1,num2)=>{
    if (num1>num2) {
        return num1

    }
    return num2
})
console.log(result)
// Task-2
function calculate(num1,num2,callback){
    var final = callback(num1,num2)
    return final*3

}
var final=calculate(10,5,(num1,num2)=>{
    if (num1==num2){
        return 0
    }
    else{
        if (num1>num2){
            return num1+num2
        }
        return num1-num2
    }
})
console.log(final)
// Task-3
function checkEvenOdd(num,callback){
    var check = callback(num)
    return check+" Number"

}
var check=checkEvenOdd(8,(num)=>{
    if (num%2==0){
        return "Even"
    }
    return "Odd"
})
console.log(check)
// Task-4
function checkSign(num,callback){
    var result1 = callback(num)
    return result1+" value"

}
var result1=checkSign(-10,(num)=>{
    if (num==0){
        return "Zero"
    }
    else{
        if (num>0){
            return "Positive"
        }
        return "Negative"
    }
})
console.log(result1)
// Task-5
function multiplyConditionally(num1,num2,callback){
    var result2=callback(num1,num2)
    return result2*4
}
var result2 = multiplyConditionally(4,6,(num1,num2)=>{
    if (num1>num2){
        return num1*num2
    }
    else {
        if (num2>num1){
            return num1+num2
        }
        return num1
    }
})
console.log(result2)