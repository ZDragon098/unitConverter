//Length Conversions Constants
const lengthConversions = {
    kilometer: 1,
    meter: 1000,
    decimeter: 10000,
    centimeter: 100000,
    millimeter: 1000000
}

//Weight Conversions Constants
const weightConversions = {
    kilogram: 1,
    gram: 1000
}


//Length converter
const lengthValue = document.getElementById('length-value');
const lengthFrom = document.getElementById('length-from');
const lengthTo = document.getElementById('length-to');
const lengthConvertBtn = document.getElementById('length-convert');


//Weight converter
const weightValue = document.getElementById('weight-value');
const weightFrom = document.getElementById('weight-from');
const weightTo = document.getElementById('weight-to');
const weightConvertBtn = document.getElementById('weight-convert');

// LengthConvert Button 
if(lengthConvertBtn) {
    lengthConvertBtn.addEventListener('click', () => {
        convertLength();
    });
}

function convertLength() {
    const value = parseFloat(lengthValue.value);
    const from = lengthFrom.value;
    const to = lengthTo.value;

    if(isNaN(value) || value === '') {
        alert('Please enter a valid number');
        return;
    }
    
    // Convert to kilometers first, then to target unit
    const valueInKm = value / lengthConversions[from];
    const result = valueInKm * lengthConversions[to];

    displayResult(`${value} ${from} = ${result.toFixed(2)} ${to}`);
}

// WeightConvert Button
if(weightConvertBtn) {
    weightConvertBtn.addEventListener('click', () => {
        convertWeight();
    });
}

function convertWeight(){
    const value = parseFloat(weightValue.value);
    const from = weightFrom.value;
    const to = weightTo.value;

    if(isNaN(value) || value === '') {
        alert('Please enter a valid number');
        return;
    }

    // Convert to kilograms first, then to target unit
    const valueInKg = value / weightConversions[from];
    const result = valueInKg * weightConversions[to];
    
    displayResult(`${value} ${from} = ${result.toFixed(2)} ${to}`);
}

//Temperature Converter
const tempValue = document.getElementById('temp-value');
const tempFrom = document.getElementById('temp-from');
const tempTo = document.getElementById('temp-to');
const tempConvertBtn = document.getElementById('temp-convert');

if(tempConvertBtn) {
    tempConvertBtn.addEventListener('click', () => {
        convertTemperature();
    });
}

function convertTemperature(){
    const value = parseFloat(tempValue.value);
    const from = tempFrom.value;
    const to = tempTo.value;

    if(isNaN(value) || value === '') {
        alert('Please enter a valid number');
        return;
    }
    
    let valueInCelsius;
    // Convert to Celsius first
    if(from === 'celsius') {
        valueInCelsius = value;
    } else if(from === 'fahrenheit') {
        valueInCelsius = (value - 32) / 1.8;
    } else if(from === 'kelvin') {
        valueInCelsius = value - 273.15;
    }

    // Convert from Celsius to target unit
    let result;
    if(to === 'celsius') {
        result = valueInCelsius;
    } else if(to === 'fahrenheit') {
        result = (valueInCelsius * 1.8) + 32;
    } else if(to === 'kelvin') {
        result = valueInCelsius + 273.15;
    }

    const icons ={
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K'
    }

    displayResult(`${value} ${icons[from]} = ${result.toFixed(2)} ${icons[to]}`);
}
// Reset Button

const resetBtn = document.getElementById('reset-btn');

if(resetBtn) {
    resetBtn.addEventListener('click',() => {
        resetForm();
    });
}

function resetForm() {
    if(lengthValue){
        lengthValue.value = '';
        lengthFrom.value = 'kilometer';
        lengthTo.value = 'kilometer';
    }
    else if(weightValue){
        weightValue.value = '';
        weightFrom.value = 'kilogram';
        weightTo.value = 'gram';
    }
    else{
        tempValue.value = '';
        tempFrom.value = 'celsius';
        tempTo.value = 'kelvin';
    }

    document.getElementById('result').style.display = 'none';
}

//Display result function
function displayResult(resultText) {
    const resultSection = document.getElementById('result');
    const resultTextElement = document.getElementById('result-text');
    resultTextElement.textContent = resultText;
    resultSection.style.display = 'block';
}