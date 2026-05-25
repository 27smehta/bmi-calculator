function calcBMI() {
    var units = document.getElementById('units').value;
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    
    if (w > 0 && h > 0) {
        var bmi;
        
        if (units === "metric") {
            bmi = w / (h * h);
        } else {
            bmi = (w / (h * h)) * 703;
        }
        
        var category = "";
        
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        
        document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(1)} (${category})`;
    } else {
        document.getElementById('result').innerText = "";
    }
}

function clearFields() {
    document.getElementById('w').value = "";
    document.getElementById('h').value = "";
    document.getElementById('result').innerText = "";
    document.getElementById('units').value = "metric";
}