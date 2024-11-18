const display = document.getElementById('display');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', event => {
    const { target } = event;
    const value = target.value;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        display.value += ' ' + target.innerHTML + ' ';
    } else if (target.classList.contains('equal-sign')) {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } else if (target.innerHTML === 'C') {
        display.value = '';
    } else if (target.innerHTML === 'CE') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += target.value;
    }
});
