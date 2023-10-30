function calculateBtn() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = document.getElementById('bmi-res');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = "Please Enter Valid Values For Height and Weight";
        return;
    }

    let heightMeters = height / 100;
    let bmi = (weight / (heightMeters * heightMeters)).toFixed(2);

    let resultText = `Your BMI is ${bmi} and you are `;

    if (bmi < 18.5) {
        resultText += 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        resultText += 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        resultText += 'Overweight';
    } else {
        resultText += 'Obese';
    }

    result.textContent = resultText;
    resetBtn
}

let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function () {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmi-res').textContent = 'Enter your details to check BMI';
});

