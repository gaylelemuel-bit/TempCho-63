

function celsiusFahrenheit(){
    let thermoElement = document.getElementById("thermo");
    let tempsElement = document.getElementById("Temps");
        celsius= prompt("Enter Celsius");
        let fahrenheit=(celsius*(9/5))+32;
        console.log(fahrenheit);
        document.getElementById("Temps").innerHTML =`<p>${celsius} \u00B0C = ${fahrenheit} \u00B0F</p>`;
    
       if (celsius < 15) { // Example condition: below 10°C is cold
        thermoElement.style.backgroundColor = "skyblue";
    } else if (celsius <= 23) { // Example condition: 10°C to 25°C is moderate
        thermoElement.style.backgroundColor = "orange";
    } else { // Above 25°C is hot
        thermoElement.style.backgroundColor = "red";
    }
}
    function fahrenheitCelsius(){
     let thermoElement = document.getElementById("thermo");
     let tempsElement = document.getElementById("temps");

        fahrenheit= prompt("Enter Fahrenheit");
        let celsius=((fahrenheit-32))*5/9;
        console.log(celsius);
        document.getElementById("Temps").innerHTML =`<p>${fahrenheit} \u00B0F= ${celsius} \u00B0C</p>`;
          if (fahrenheit < 60) { // Example condition: below 10°C is cold
        thermoElement.style.backgroundColor = "skyblue";
    } else if (fahrenheit  <= 75) { // Example condition: 10°C to 25°C is moderate
        thermoElement.style.backgroundColor = "orange";
    } else { // Above 25°C is hot
        thermoElement.style.backgroundColor = "red";
    }
     }
 
function Thermo(){
    for(let i=0;i<10;i++){
        let level= document.createElement("div");
        level.classList.add("level");
        console.log(level);
        if (i<70){
            level.style.backgroundColor="red";
        }
        else if(i<100){
            level.style.backgroundColor="orange";
        }
    }
}
function generateTable(){
    for(let celsuis=0;celsuis<100; celsuis++){
        let fahrenheit=(celsuis*(9/5))+32;
        console.log(fahrenheit);

document.getElementById("temps").innerHTML+=`<tr>
</tr>
<td>${celsuis}\u00B0C</td>
<td>${fahrenheit}\u00B0F</td>
</tr>`   
 }
 }
 generateTable()