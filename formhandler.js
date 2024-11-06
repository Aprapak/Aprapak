// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        collaboration: document.querySelector('input[name="collab"]:checked')?.value || '',
        interest: document.getElementById('interest').value,
        contactTime: Array.from(document.querySelectorAll('input[name="contactTime"]:checked')).map(el => el.value),
        subscribe: document.getElementById('subscribe').checked,
        message: document.getElementById('message').value,
    };

    // Save form data to local storage for persistence
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Alert the user and log form data to console
    alert('Your information has been saved!');
    console.log('Form Data:', formData); // Output the form data in the console for debugging

    // Clear the form after submission
    document.getElementById('contactForm').reset();
});

// Form Reset Handling
document.getElementById('contactForm').addEventListener('reset', function () {
    // Clear data from local storage
    localStorage.removeItem('contactFormData');
    alert('All input has been cleared.');
});
