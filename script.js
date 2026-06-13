function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);

    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result = temp;

    if (isNaN(temp)) {
        document.getElementById("result").innerHTML = "Please enter a valid number";
        return;
    }

    // Convert input to Celsius first

    if (from === "fahrenheit") {
        result = (temp - 32) * 5 / 9;
    }
    else if (from === "kelvin") {
        result = temp - 273.15;
    }

    // Convert Celsius to target unit

    if (to === "fahrenheit") {
        result = (result * 9 / 5) + 32;
    }
    else if (to === "kelvin") {
        result = result + 273.15;
    }

   let unit = "";

if (to === "celsius") {
    unit = "°C";
}
else if (to === "fahrenheit") {
    unit = "°F";
}
else if (to === "kelvin") {
    unit = "K";
}

document.getElementById("result").innerHTML =
    result.toFixed(2) + " " + unit;
}

function resetFields() {

    document.getElementById("temperature").value = "";

    document.getElementById("fromUnit").selectedIndex = 0;

    document.getElementById("toUnit").selectedIndex = 0;

    document.getElementById("result").innerHTML = "--";
}