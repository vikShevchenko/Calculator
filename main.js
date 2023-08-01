const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {

            case 'AC':
                display.innerText = '0'
                break;

            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (e) {
                    display.innerText = 'Error'
                }
                break;

            case '+/-':
                display.innerText = '-'
                break;

            case '%':
                let passText = display.innerText + '/100'
                display.innerText = eval(passText)
                break;

            default:
                if (display.innerText === '0' && e.target.innerText !== '.') {
                    display.innerText = e.target.innerText
                } else {
                    display.innerText += e.target.innerText
                }
        }
    })
})

