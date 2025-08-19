const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('.btn');
const operators = ['+', '-', '*', '/', '.'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if(value === 'AC'){
            display.value = '';
        }
        else if(value === 'C'){
            display.value = display.value.slice(0, -1);
        }
        else if(value === '='){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = 'Error';
            }
        }
        else if(operators.includes(value)){
            const lastChar = display.value.slice(-1);
            if(!operators.includes(lastChar) && display.value !== ''){
                display.value += value;
            }
        }
        else{
            display.value += value;
        }

    });
});