console.log();

//if statement condition(y/n)

//syntax
//if (condition){
///code to execute if the condition is true
//}

//let result=50;

//if(result> 40){
    //console.log("you pass the exam");

    //let result2=50;

    //if(result==result2){
      //  console.log("your valuse are the same");
    //}
//}
//case 1 5==5 
//case2 5=="5"

//if-else statement
//syntax
//if (condition){
///code to execute if the condition is true
//}else{
// code to be executed if condition is false//}
    
//let waterTemp=105;
//if(waterTemp>= 100){
  //  console.log("water is boiling");
//}
//else{
  //  console.log("water is not boiling");
//}


//function ageCalculator(){
   // let age=18;
   // if(age < 21){
    //console.log{"you must be 18 or older"}
    // else if(age >=18){
    //console.log("you are welcome");
   // }
    //else(age<18 ){
     //   console.log("you can not enter");
    //}
//}
//}//

// challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color  (use a prompt)
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

function trafficLight(green, yellow, red){
    let color= prompt();


    if(trafficLight== green){
        console.log("you can go")}
        else if(trafficLight == yellow){
            console.log("slow down");}
            else( trafficLight == red);{
            console.log("stop");}
        }



        let userType= "editor";
        if(userType === admin){
            console.log("access");
            document.write("welcome");
        }else if("userType===editor"){
            console.log("limited access");
            document.write("limited access user");
        }else{
            document.write("error 404")
            console.log("you don't have accesss");
        }



        //switch-case




        function weatherOutFit(){
            console.log("weather out!");
            let tmp;
            const DIV=document.getElementById("results");

            tmp= prompt("enter temperature");

            if(tmp > 15){
                DIV.innerHTML="jacket";
            }else if( tmp <26){
                DIV.innerHTML="sweater";
            }else{
                DIV.innerHTML="t-shirt";
            }
        }