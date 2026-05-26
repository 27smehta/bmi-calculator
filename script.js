function calcBMI() {
    var units = document.getElementById('units').value;
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var resultText = document.getElementById('result');
    
    var idealText = document.getElementById('ideal-weight');
    var weightLabel = document.getElementById('weight-label');
    var heightLabel = document.getElementById('height-label');
    
    if (units === "metric") {
        weightLabel.innerText = "Weight (kg):";
        heightLabel.innerText = "Height (m):";
    } else {
        weightLabel.innerText = "Weight (lbs):";
        heightLabel.innerText = "Height (inches):";
    }

    if (w > 0 && h > 0) {
        var bmi;
        var minWeight;
        var maxWeight;
        
        if (units === "metric") {
            bmi = w / (h * h);
            minWeight = 18.5 * (h * h);
            maxWeight = 24.9 * (h * h);
            idealText.innerText = `Healthy weight range: ${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} kg`;
        } else {
            bmi = (w / (h * h)) * 703;
            minWeight = (18.5 * (h * h)) / 703;
            maxWeight = (24.9 * (h * h)) / 703;
            idealText.innerText = `Healthy weight range: ${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} lbs`;
        }
        
        var category = "";
        var textColor = "";
        
        if (bmi < 18.5) {
            category = "Underweight";
            textColor = "orange";
        } else if (bmi < 25) {
            category = "Normal weight";
            textColor = "green";
        } else if (bmi < 30) {
            category = "Overweight";
            textColor = "orange";
        } else {
            category = "Obese";
            textColor = "red";
        }
        
        resultText.innerText = `Your BMI is ${bmi.toFixed(1)} (${category})`;
        resultText.style.color = textColor;
    } else {
        resultText.innerText = "";
        idealText.innerText = "";
    }
}

function clearFields() {
    document.getElementById('w').value = "";
    document.getElementById('h').value = "";
    document.getElementById('units').value = "metric";
    
    document.getElementById('weight-label').innerText = "Weight (kg):";
    document.getElementById('height-label').innerText = "Height (m):";
    
    var resultText = document.getElementById('result');
    resultText.innerText = "";
    resultText.style.color = "#333";
    
    document.getElementById('ideal-weight').innerText = "";
}