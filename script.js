// Fonction pour vérifier si un nombre est premier
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fonction pour afficher le résultat
function displayResult(message, className) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="result ${className}">${message}</div>`;
}

// Fonction principale pour tester le nombre
function checkPrime() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    
    // Validation de l'entrée
    if (isNaN(number) || number < 0) {
        displayResult('Veuillez entrer un nombre positif valide', 'error');
        return;
    }
    
    // Test de primalité
    const prime = isPrime(number);
    const message = prime ? 
        `✅ ${number} est un nombre premier !` : 
        `❌ ${number} n'est pas un nombre premier.`;
    
    displayResult(message, prime ? 'prime' : 'not-prime');
}

// Événements
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('checkButton');
    const input = document.getElementById('numberInput');
    
    // Clic sur le bouton
    button.addEventListener('click', checkPrime);
    
    // Touche Entrée
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPrime();
        }
    });
    
    // Focus automatique sur l'input
    input.focus();
});