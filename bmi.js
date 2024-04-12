document.getElementById('calculate').addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if(isNaN(height) ){
        displayAlert1();
    }
    if(isNaN(weight)){
        displayAlert2();
    }
    if (!isNaN(height) && !isNaN(weight)) {
        const bmi = calculateBMI(height, weight);
        displayResult(bmi);
        displayChart(bmi);
        displayOff();
    }
    
});
const ale1=document.getElementById('alert1');
const ale2=document.getElementById('alert2');
function calculateBMI(height, weight) {
    return weight / ((height / 100) ** 2);
}

function displayResult(bmi) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;
    if(bmi>18.5 && bmi<25) resultElement.style.color="green";
    else resultElement.style.color="red";
    
}


function displayAlert1(){
    
    ale1.textContent="please enter the field";
    // window.alert("Enter all the fields");
    // console.log("Enter all the fields");

}
function displayAlert2(){
    
    ale2.textContent="please enter the field";
    // window.alert("Enter all the fields");
    // console.log("Enter all the fields");

}

function displayOff(){
    ale1.style.display="none";
    ale2.style.display="none";

}

function displayChart(bmi) {
    const chartElement = document.getElementById('chart');
    chartElement.innerHTML = '<canvas id="bmiChart" width="400" height="200"></canvas>';
    
    const ctx = document.getElementById('bmiChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            
            labels: ['Underweight', 'Normal', 'Overweight', 'Obese'],
            datasets: [{
                data: [bmi < 18.5 ? bmi : 0, (bmi >= 18.5 && bmi < 25) ? bmi : 0, (bmi >= 25 && bmi < 30) ? bmi : 0, bmi >= 30 ? bmi : 0],
                backgroundColor: ['#ff0000', '#00ff00', 'black', '#ff00ff'],
            }],
        },
        options: {
            responsive: true,
        },
    });
}
