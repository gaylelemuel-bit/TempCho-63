function convertTemperature() {
    let temperature = prompt("Enter the temperature value:");
    let scale = document.getElementById("scale").value;
    let resultDisplay = document.getElementById("result");
    let convertedTemp;
    switch (scale) {
        case "C":
            convertedTemp = (temperature - 32) * 5 / 9;
            resultDisplay.innerHTML = `${temperature}°C is equal to ${convertedTemp}°F`;
            break;
        case "F":
            convertedTemp = (temperature * 9 / 5) + 32;
            resultDisplay.innerHTML = `${temperature}°F is equal to ${convertedTemp}°C`;
            break;
        default:
            resultDisplay.innerHTML = "Invalid scale selected.";
            return;
    }
    if (convertedTemp <= 25) {
      document.getElementById("Drip").innerHTML +='<li>Coldest</li>';
    }else if (convertedTemp <= 65){
        document.getElementById("Drip").innerHTML +='<li>Still Cold </li>';
    }else if (convertedTemp < 100){
        document.getElementById("Drip").innerHTML +='<li> Summer time Again!</li>';
    }else {
        document.getElementById("Drip").innerHTML +='Invalid Temperature try again please..</li>'; 88
    }
}
convertTemperature();