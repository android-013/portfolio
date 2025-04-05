const rotors = [
    "EKMFLGDQVZNTOWYHXUSPAIBRCJD", // Rotor I
    "AJDKSIRUXBLHWTMCQGZNPYFVOE", // Rotor II
    "BDFHJLCPRTXVZNYEIWGAKMUSQO"  // Rotor III
];

const reflector = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

function enigmaEncoder(input, rotorPositions = [0, 0, 0]) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i].toUpperCase();
        
        if (/[A-Z]/.test(char)) {
            for (let rotorIndex = 0; rotorIndex < rotors.length; rotorIndex++) {
                char = rotorStep(char, rotors[rotorIndex], rotorPositions[rotorIndex]);
            }
            
            char = reflector[char.charCodeAt(0) - 65];
            
            for (let rotorIndex = rotors.length - 1; rotorIndex >= 0; rotorIndex--) {
                char = rotorStepReverse(char, rotors[rotorIndex], rotorPositions[rotorIndex]);
            }
            
            output += char;
        } else {
            output += char;
        }
    }
    return output;
}

function rotorStep(char, rotor, position) {
    let shiftedChar = String.fromCharCode((char.charCodeAt(0) - 65 + position) % 26 + 65);
    return rotor[shiftedChar.charCodeAt(0) - 65];
}

function rotorStepReverse(char, rotor, position) {
    let rotorIndex = rotor.indexOf(char);
    return String.fromCharCode((rotorIndex - position + 26) % 26 + 65);
}

// Function to display the text with animation
function animateText(text) {
    const resultTextArea = document.getElementById('resultText');
    resultTextArea.value = ''; // Clear previous text
    let i = 0;

    function typeCharacter() {
        if (i < text.length) {
            resultTextArea.value += text.charAt(i);
            i++;
            setTimeout(typeCharacter, 10); // Delay of 10ms per character
        }
    }

    typeCharacter();
}

function processText(action) {
    const inputText = document.getElementById('inputText').value;
    let rotorPositions = [0, 0, 0]; // Initial rotor positions, could be set dynamically
    
    let outputText = '';
    if (action === 'encrypt') {
        outputText = enigmaEncoder(inputText, rotorPositions);
    } else if (action === 'decrypt') {
        outputText = enigmaEncoder(inputText, rotorPositions); // Same function for decryption
    }
    
    animateText(outputText); // Animate the output text
}
