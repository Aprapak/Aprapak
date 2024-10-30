// Directly attach the event listener to the button
const nameButton = document.getElementById('nameButton');
const greetingMessage = document.getElementById('greetingMessage');

nameButton.addEventListener('click', function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        greetingMessage.textContent = `Hello, ${userName}! Welcome to my website.`;
    }
});
