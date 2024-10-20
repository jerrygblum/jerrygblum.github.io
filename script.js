// script.js

// Countdown timer with timezone support
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Define the target date in UTC timezone
    const targetDate = new Date(Date.UTC(2024, 9, 31, 11, 0, 0)); // October 2, 2024, at 13:50:00 UTC
    const now = new Date();

    // Calculate the distance between now and the target date
    const distance = targetDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display countdown in days, hours, and minutes
    if (countdownElement) {
        countdownElement.innerHTML = `Only ${days} days, ${hours} hours, and ${minutes} minutes left!`;

        // Check if the target date has been reached
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "I'm in Switzerland!";
        }
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately
