const passwordField = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showpassword');
showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});