// Get references to the DOM elements
const countDisplay = document.getElementById('count');
const countButton = document.getElementById('countButton');

// Initialize the counter and direction
let counter = 0;
let direction = 1; // 1 for counting up, -1 for counting down

// Add event listener to the button
countButton.addEventListener('click', () => {
    // Disable the button
    countButton.disabled = true;

    // Start counting
    const interval = setInterval(() => {
        // Update the counter based on the direction
        counter += direction;

        // Update the display
        countDisplay.textContent = counter;

        // Check if the counter has reached the limit
        if ((direction === 1 && counter === 10) || (direction === -1 && counter === 1)) {
            // Stop the interval
            clearInterval(interval);

            // Reverse the direction
            direction *= -1;

            // Enable the button again
            countButton.disabled = false;
        }
    }, 1000); // Adjust the interval time as needed (1000ms = 1 second)
});
