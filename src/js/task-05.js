const refs = {
    inputEl: document.querySelector('input#name-input'),
    helloEl: document.querySelector('h1 > span')
}; console.log(refs);

refs.inputEl.addEventListener('input', onInputElChange);

function onInputElFocus() {
    console.log('Инпут получил фокус - событие focus');
};

function oninputElBlur() {
    console.log('инпут потерял фокус - событие blur');
};

function onInputElChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.length < 1) {
        refs.helloEl.textContent = 'незнакомец';
    } else {
        refs.helloEl.textContent = event.currentTarget.value
    }
};