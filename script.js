function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result = "";

    if (isNaN(temperatureInput)) {
        result = "Please enter a valid number.";
    } else {
        if (unit === "celsius") {
            result = `${temperatureInput} °C is ${((temperatureInput * 9/5) + 32).toFixed(2)} °F and ${(temperatureInput + 273.15).toFixed(2)} K`;
        } else if (unit === "fahrenheit") {
            result = `${temperatureInput} °F is ${((temperatureInput - 32) * 5/9).toFixed(2)} °C and ${(((temperatureInput - 32) * 5/9) + 273.15).toFixed(2)} K`;
        } else if (unit === "kelvin") {
            result = `${temperatureInput} K is ${((temperatureInput - 273.15) * 9/5 + 32).toFixed(2)} °F and ${(temperatureInput - 273.15).toFixed(2)} °C`;
        }
    }

    document.getElementById("result").textContent = result;
}
