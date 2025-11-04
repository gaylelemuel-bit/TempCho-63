function celsiusToFahrenheit(){
    let cel=prompt ("Enter the Fahrenheit");
    let Fah=(cel * 9/5)+32;
    document.getElementById("tempResult").innerHTML += `<li>${cel} degrees celsius is equal to ${Fah} degrees fahrenheit </li>`;
}