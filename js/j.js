// Task-1
function sayHello () {
       
    console.log ("Hello, World !");
 }
sayHello ();
  // Task-2
function displayWarning () {

     console.log("Warning! System Overload!");
}
displayWarning();
// Task-3
function printStatus () {

     console.log("System status: Active")
}
printStatus()
   // Task-4
function initialize () {

       console.log("Initialization Complete.")
         shutdown();
}
function shutdown() {
   
       console.log("System Shutting Down...")
}
initialize();
// Task-5
 function startProcess () {

          console.log("Process Started");
            
            endProcess();
}
function endProcess() {
                
                console.log("Process Ended")
}

      startProcess()
      // Task - 6
 function greetUser (name) {

       console.log('Hello',name,'!')
}
  greetUser('mani')
  greetUser('sai')
  greetUser('Ram')
  // Task-7
 function calculateSum (a,b) {

          var a;
          var b;
          console.log(a + b);
}
 calculateSum(5,12);
 calculateSum(9,2);
 // Task-8
 function countDown (){

  var i;
 for (i=5; i>=1; i--)
console.log(i)
}
countDown ()

 // Task-9
function checkEvenOdd (num) {
            
             var num;
           if (num%2==0)
               console.log("Even")
           else 
              console.log("Odd")
}
checkEvenOdd (87)
checkEvenOdd (64)
// Task-10
 function beginSession () {

       console.log("Session Started.")
        endSession ()
}
function endSession () {

              console.log ("Session Ended.")
}
beginSession ()

            