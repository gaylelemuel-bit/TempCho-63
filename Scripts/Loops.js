//console.log("loops");
//for
//for(start_point, condition;interval)


//for(let i=0;i<110;i++){
  //  console.log(i);
//}

function muiltTable(){
    for(let i=2;i<=10;i++){
        console.log(`${2}x${i}=${i*2}`);
    }
}
muiltTable();
 for(let i=2*1;i<5;i++){
        console.log("counter");
    }
    console.log( "the code continues here");


 for(let i=1;i<8;i++){
    if(i==1){
        console.log("Gold medal");
    }else if(i==2){
        console.log("silver medal" )
    }else if(i==3){
        console.log("Bronze medal" )
    }else{
        console.log("Runner" + i);
    } 

 }

 function fillThermo(){
    for(let i=0;i<10;i++){
        let level= document.createElement("div");
        level.classList.add("level");
        console.log(level);
        if (i<3){
            level.style.backgroundColor="red";
        }
        else if(i<7){
            level.style.backgroundColor="orange";
        }
        document.getElementById("thermo").appendChild(level);
    }
 }

 function generateTable(){
    for(let celsuis=0;celsuis<10; celsuis++){
        let fahrenheit=(celsuis*(9/5))+32;
        console.log(fahrenheit);

document.getElementById("temps").innerHTML+=`<tr>
</tr>
<td>${celsuis}</td>
<td>${fahrenheit}</td>
</tr>`   
 }
 }
 generateTable()
 