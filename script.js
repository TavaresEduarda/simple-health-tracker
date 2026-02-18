const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    // Converter altura de cm para metros
    height = height / 100;

    if (weight > 0 && height > 0) {
        
        
        const bmi = weight / (height *  height);
    
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
    } else{
        alert("Please fill in all fields!");
    }
});