
// week 6 Assigment
// ================
// 1. Event Handling
const messageButton = document.getElementById('messageBtn');
const messageArea = document.getElementById('messageArea');


messageButton.addEventListener('click',() => {
    messageArea.textContent = "Button Clicked Event Handling Successful"
});

// ================
// 2. Interactive elements
// Light/Dark Mode Toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark");
});

// ================
// 3. Form Validation
const form = document.getElementById('signUpForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // validate name
    const name = document.getElementById('name').value.trim();
    if (name.length < 3){
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long';
        valid = false;
    }

    // validate email with regex
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }
    const password = document.getElementById("password").value;

    // validate password
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Success
    if (valid) {
        document.getElementById("formSuccess").textContent = " Form submitted successfully!";
        form.reset();
    }

});