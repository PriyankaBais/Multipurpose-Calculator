// Function to speak text
function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// Handle Tabs
function switchTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

// Basic Calculator
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
    speak(number);
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    document.getElementById('display').value = currentInput;
    speak(operator);
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
    speak("Cleared");
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
        speak("Result is " + currentInput);
    } catch (error) {
        document.getElementById('display').value = 'Error';
        speak("Error");
    }
}

// Currency Converter (USD to INR)
function convertCurrency() {
    let usd = document.getElementById('usd').value;
    let conversionRate = 83; // 1 USD = 83 INR (Example Rate)
    let inr = (usd * conversionRate).toFixed(2);
    document.getElementById('inrResult').innerText = inr;
    speak(`Converted amount is ${inr} Indian Rupees`);
}

// CGPA Calculator
function calculateCGPA() {
    let grades = document.getElementById('grades').value.split(',').map(Number);
    let cgpa = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    document.getElementById('cgpaResult').innerText = cgpa;
    speak(`Your CGPA is ${cgpa}`);
}

// Area Calculator
function calculateArea() {
    let shape = document.getElementById('shape').value;
    let area = 0;

    if (shape === 'circle') {
        let radius = document.getElementById('radius').value;
        area = Math.PI * radius * radius;
    } else if (shape === 'square') {
        let side = document.getElementById('side').value;
        area = side * side;
    } else if (shape === 'cube') {
        let side = document.getElementById('cubeSide').value;
        area = 6 * side * side;
    } else if (shape === 'cuboid') {
        let length = document.getElementById('length').value;
        let width = document.getElementById('width').value;
        let height = document.getElementById('height').value;
        area = 2 * (length * width + length * height + width * height);
    } else if (shape === 'cylinder') {
        let radius = document.getElementById('cylinderRadius').value;
        let height = document.getElementById('cylinderHeight').value;
        area = 2 * Math.PI * radius * (radius + height);
    } else if (shape === 'rectangle') {
        let length = document.getElementById('rectLength').value;
        let width = document.getElementById('rectWidth').value;
        area = length * width;
    } else if (shape === 'cone') {
        let radius = document.getElementById('coneRadius').value;
        let height = document.getElementById('coneHeight').value;
        area = Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius));
    } else if (shape === 'sphere') {
        let radius = document.getElementById('sphereRadius').value;
        area = 4 * Math.PI * radius * radius;
    }

    document.getElementById('areaResult').innerText = area.toFixed(2);
    speak(`The area is ${area.toFixed(2)}`);
}

// Temperature Converter
function convertTemperature() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').innerText = fahrenheit.toFixed(2);
    speak(`Temperature in Fahrenheit is ${fahrenheit.toFixed(2)}`);
}

// Percentage Calculator
function calculatePercentage() {
    let marksObtained = document.getElementById('marksObtained').value;
    let totalMarks = document.getElementById('totalMarks').value;
    let percentage = (marksObtained / totalMarks) * 100;
    document.getElementById('percentageResult').innerText = percentage.toFixed(2) + '%';
    speak(`Your percentage is ${percentage.toFixed(2)} percent`);
}
