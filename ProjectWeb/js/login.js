const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signInBtn = document.getElementById('signIn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
var nameError = document.getElementById('nameError');

const signUpName = document.getElementById('signUpName');
const signUpBtn = document.getElementById('signUp');
const signUpEmailInput = document.getElementById('signUpEmail');
const signUpPasswordInput = document.getElementById('signUpPassword');

// Regular expressions for email and password validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com(\.vn)?$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// At least 8 characters, at least one letter and one number

// Get existing accounts from localStorage or initialize an empty array
var accounts = JSON.parse(localStorage.getItem('accounts')) || [];


signUpName.addEventListener('blur', function () {
    // Validate name
    if (signUpName.value === '') {
        nameError.textContent = 'Vui lòng nhập tên.';
    } else {
        nameError.textContent = '';
    }
});
signUpEmailInput.addEventListener('blur', function () {
    // Validate email
    if (!emailRegex.test(signUpEmailInput.value)) {
        emailError.textContent = 'Vui lòng nhập email hợp lệ.Vd: 123@gmail.com';
    } else {
        emailError.textContent = '';
    }
});
signUpPasswordInput.addEventListener('blur', function () {
    // Validate password
    if (!passwordRegex.test(signUpPasswordInput.value)) {
        passwordError.textContent = 'Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm ít nhất một chữ cái và một số.';
    } else {
        passwordError.textContent = '';
    }
});


signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    var storedAccounts = JSON.parse(localStorage.getItem('accounts'));
    var accountExists = false;

    if (!storedAccounts) {
        storedAccounts = [];
    }

    // Check if entered email already exists in localStorage
    for (var i = 0; i < storedAccounts.length; i++) {
        if (signUpEmailInput.value === storedAccounts[i].email) {
            accountExists = true;
            break;
        }
    }

    if (!accountExists) {
        // Create account object
        var account = {
            email: signUpEmailInput.value,
            password: signUpPasswordInput.value
        };

        // Add account to accounts array
        accounts.push(account);

        // Save accounts array to localStorage
        localStorage.setItem('accounts', JSON.stringify(accounts));

        alert('Đăng ký tài khoản thành công!');
    } else {
        alert('Tài khoản đã tồn tại.');
    }

});

signInBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get accounts array from localStorage
    var storedAccounts = JSON.parse(localStorage.getItem('accounts'));

    // Check if entered account matches any of the accounts in localStorage
    for (var i = 0; i < storedAccounts.length; i++) {
        if (emailInput.value === storedAccounts[i].email &&
            passwordInput.value === storedAccounts[i].password) {
            window.location.href = '../html/home.html';
            alert('Đăng nhập thành công!');
            return;
        }
    }

    alert('Email hoặc mật khẩu không đúng.');
});