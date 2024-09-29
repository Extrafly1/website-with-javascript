function validateForm() {
    let emailInput = document.getElementById('email').value;
    let atIndex = emailInput.indexOf('@');
    if (atIndex === -1 || emailInput.length < 3) {
        alert('Please enter a valid email address.');
        return;
    }

    let bioInput = document.getElementById('bio').value;
    if (bioInput.length < 10) {
        alert('Please provide a longer biography.');
        return;
    }

    let photoInput = document.getElementById('photo').files[0];
    if (photoInput === undefined) {
        alert('Please upload a photo.');
        return;
    }

    let specialtyInput = document.getElementById('specialty').value;
    if (specialtyInput === '') {
        alert('Please select a specialty.');
        return;
    }

    let genderInput = document.getElementById('gender').value;
    if (genderInput === '') {
        alert('Please select a gender.');
        return;
    }

    let usernameInput = document.getElementById('username').value;
    if (usernameInput.length < 5) {
        alert('Username must be at least 5 characters long.');
        return;
    }

    let middlenameInput = document.getElementById('middlename').value;
    if (middlenameInput === '') {
        middlenameInput = 'none';
    }

    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    if (firstName.length < 2 || lastName.length < 2) {
        alert('Please enter a valid first and last name.');
        return;
    }

    let password = document.getElementById('password').value;
    let hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (!hasNumber || !hasSpecialChar || !hasUppercase || !hasLowercase || password.length < 8) {
        alert('Password must be at least 8 characters long. OR Password must contain at least one special character, one uppercase letter, and one lowercase letter.');
        return;
    }

    alert('Registration successful!');
}