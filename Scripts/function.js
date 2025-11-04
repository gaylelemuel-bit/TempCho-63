console.log("functions");

// function declaration
function sayHello(){
    console.log("Welcome to angry Birds");
}

//call/run/trigger
sayHello();

//example 2 with 1 parameter
function greetBird(birdName){
    console.log(`hello ${birdName}"! ready to destory some pigs?`);
}
greetBird();

// example 3 
function greetPlayer(firstName, lastName){
    console.log(`Welcome back ${firstName} ${lastName}`);
}
greetPlayer(`will`);

//challenge1

function doubleScore(score){
    let total= score * 2;
    console.log(`your score is ${total}`);
}
doubleScore(12);
//examples 4
function pigName(){
    let pigName= prompt("Enter pig's Name")
    console.log(`target: ${pigName}`);
}
//pigName();
//example
function addPoints(point1, point2){
    let total= point1 + point2;
    console.log(`your score is ${total}`);
}
addPoints( 50, 6);
addPoints( 40, 16);
addPoints( 500, 66);

//challenge

//function convertToSeconds(mins){
// let secs= mins * 60;
// console.log(`${mins}answer is ${secs}`);}

//convertToSeconds

function convertToSeconds(){
    let mins= prompt("Enter minutes");
    let secs=mins * 60;
    console.log(`${mins} minutes are ${secs}`);
}