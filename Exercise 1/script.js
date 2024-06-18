// Run the following code when the document is fully loaded
$(document).ready(function() {
    // Attach a click event handler to the button with id 'showPrimesBtn'
    $('#showPrimesBtn').click(displayPrimes);
});

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Multiples of 2 and 3 are not prime
    // Check for factors from 5 to the square root of the number
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true; // If no factors are found, the number is prime
}

// Function to display prime numbers up to the given number
function displayPrimes() {
    // Get the input value and convert it to an integer
    const n = parseInt($('#number').val());
    const resultDiv = $('#result');
    resultDiv.empty(); // Clear the result div

    // Check if the input is a valid number
    if (isNaN(n)) {
        resultDiv.html('Please enter a valid integer.');
        return;
    }

    const primes = [];
    // Collect all prime numbers up to n
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Display the prime numbers
    resultDiv.html('Prime numbers up to ' + n + ': ' + primes.join(', '));
}
