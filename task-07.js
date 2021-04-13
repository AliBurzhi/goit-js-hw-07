const rangeValue = document.getElementById('font-size-control');
const text = document.getElementById('text');

rangeValue.addEventListener('input', () => {
    return text.style.fontSize = rangeValue.value + 'px';
})