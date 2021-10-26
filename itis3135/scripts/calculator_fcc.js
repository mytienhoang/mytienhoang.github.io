const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorkeys')
const display = document.querySelector('.calculatorkeys');

keys.addEventListener('click', e => 
    { 
        if (e.target.matches('button'))
        {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            if (!action)    
            {
                if(displayedNum === '0')
                {
                    console.log('0');
                }
                else {
                    console.log('number Key');
                    calculator.dataset.secondValue = keyContent;
                    display.textContent = displayedNum + keyContent;
                }
            }
            else if (action==='add'||action==='subtract'||action==='multiply' ||action==='divide')
            {
                console.log('operator Key');
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;
                display.textContent = display + keyContent;
            }
            else if (action === 'decimal') 
            {
                console.log('decimal Key');
                display.textContent = displayedNum + '.';
            }
            else if (action === 'clear') 
            {
                console.log('clear key');
                display.textContent = 0;
            }
            else if (action === 'equal') 
            {
                console.log('equal key');
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = calculator.dataset.secondValue;
                display.textContent = calculator(firstValue, operator, secondValue);
            }
        }
    }
    );
const calculate = ( StringValue1, operator, StringValue2 ) => {
    let result = '';
    var value1 = parseFloat(StringValue1);
    var value2 = parseFloat(StringValue2);
    if (operator === 'add')
    {
        result = value1 + value2;
    }
    else if (operator === 'subtract')
    {
        result = value1 - value2;
    }

    else if (operator === 'multiply')
    {
        result = value1*value2;
    }
    else if (operator === 'divide')
    {
        result = value1/value2;
    }
    return result;

} 
