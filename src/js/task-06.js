const input = document.getElementById('validation-input');
const validLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', function () {
    const enteredValue = this.value.trim();
    const isValid = enteredValue.length === validLength;

    if (isValid) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});