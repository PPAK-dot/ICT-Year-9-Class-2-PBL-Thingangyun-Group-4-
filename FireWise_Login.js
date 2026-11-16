
// LOGIN FORM

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginResult = document.getElementById("login-result");

// EMAIL VALIDATION

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// PASSWORD VALIDATION

function validatePassword() {

    const password = passwordInput.value;

    if (password.trim() === "") {
        passwordError.textContent = "Password is required";
        return false;
    }

    if (password.length < 8) {
        passwordError.textContent =
            "Password must contain at least 8 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

// LIVE VALIDATION

emailInput.addEventListener("input", function () {
    validateEmail();
    loginResult.textContent = "";
});

passwordInput.addEventListener("input", function () {
    validatePassword();
    loginResult.textContent = "";
});

// SHOW / HIDE PASSWORD

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    const icon = togglePassword.querySelector("i");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        icon.classList.replace("bi-eye", "bi-eye-slash");

    } else {

        passwordInput.type = "password";
        icon.classList.replace("bi-eye-slash", "bi-eye");

    }
});

// LOGIN SUBMISSION

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (emailValid && passwordValid) {
        loginResult.style.color = "#198754";
        loginResult.textContent = "Login successful! Redirecting...";

        setTimeout(function() {
            window.location.href = "FireWise_HomePage.html";
        }, 1000);

    } else {
        loginResult.style.color = "#e52b2b";
        loginResult.textContent = "Please correct the errors above.";
    }
});