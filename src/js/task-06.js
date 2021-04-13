const inputValue = document.querySelector('#validation-input');
const inputLength = inputValue.getAttribute('data-length');
const lengthControl = parseInt(inputLength, 10);
console.log(inputLength);

inputValue.addEventListener('blur', () => {

    if (inputValue.value.length == inputLength) {
        inputValue.classList.add("valid");
        inputValue.classList.remove("invalid")
    } else {
        inputValue.classList.add("invalid")
    };
});