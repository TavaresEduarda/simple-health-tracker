const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    // Converter altura de cm para metros
    height = height / 100;

    if (weight > 0 && height > 0) {
        const bmi = weight / (height *  height);
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
        
        if (bmi < 18.5) {
            document.getElementById('description').innerText = "Status: Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            document.getElementById('description').innerText = "Status: Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            document.getElementById('description').innerText = "Status: Overweight";
        } else {
            document.getElementById('description').innerText = "Status: Obesity";
        }
    } else{
        alert("Please fill in all fields!");
    }
});