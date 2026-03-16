const result = document.getElementById("bmiResult");
const categoryText = document.getElementById("bmiCategory");
const weightError = document.getElementById("weight-error");
const heightError = document.getElementById("height-error");
const bmiCalculateBtn = document.getElementById("calculateBtn");

bmiCalculateBtn.addEventListener("click", function () {

    weightError.textContent = '';
    heightError.textContent = '';
    categoryText.textContent = '';
    result.textContent = '';

    let weightInput = document.getElementById("userWeight").value.trim();
    let heightInput = document.getElementById("userHeight").value.trim();

    let isValid = true;

    const numberPattern = /^[0-9]+(\.[0-9]+)?$/;

    if (!numberPattern.test(weightInput)) {
        weightError.textContent = "Enter valid weight in kg";
        isValid = false;
    }

    if (!numberPattern.test(heightInput)) {
        heightError.textContent = "Enter valid height in cm";
        isValid = false;
    }

    if (!isValid) return;

    let weight = parseFloat(weightInput);
    let height = parseFloat(heightInput);

    let heightInMeters = height / 100;

    let bmi = weight / (Math.pow(heightInMeters, 2));
    bmi = bmi.toFixed(2);

    result.textContent = "BMI: " + bmi;

    let category = "";

    document.querySelectorAll(".scale").forEach(el =>
        el.classList.remove("active")
    );

    if (bmi < 18.5) {
        category = "Underweight";
        document.querySelector(".underweight").classList.add("active");
    }
    else if (bmi < 24.9) {
        category = "Healthy";
        document.querySelector(".healthy").classList.add("active");
    }
    else if (bmi < 29.9) {
        category = "Overweight";
        document.querySelector(".overweight").classList.add("active");
    }
    else {
        category = "Obese";
        document.querySelector(".obese").classList.add("active");
    }

    categoryText.textContent = category;

});