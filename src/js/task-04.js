const removeValue = document.querySelector('[data-action="decrement"]')
const addValue = document.querySelector('[data-action="increment"]')
const counterValue = document.querySelector('#value')


let currentValue = Number(counterValue.textContent);

addValue.addEventListener('click', () => {
    return counterValue.textContent = currentValue += 1;
})

removeValue.addEventListener('click', () => {
    return counterValue.textContent = currentValue -= 1;
})




// removeValue.addEventListener('click', () => {
//     return counterValue.textContent -= 1;
// })
