const btnE1 = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightConditionE1 = document.getElementById("weight-condition")

function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weightValue / (heightValue*heightValue)

    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionE1.innerText = "Under Weight"
    }
    else if(bmiValue >= 18.5 && bmiValue <=24.9){
        weightConditionE1.innerText = "Normal Weight"
    }
    else if(bmiValue >= 25 && bmiValue <=29.9){
        weightConditionE1.innerText = "Over Weight"
    }
    else {
        weightConditionE1.innerText = "Obese"
    }
    
}



btnE1.addEventListener("click", calculateBMI)