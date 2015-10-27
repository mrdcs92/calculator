/*
<button> elements for the buttons, <button>7</button>
<input> element for the display

.value changes contents of the display
*/

/*global math*/

var div = document.createElement('div');
div.id = 'calculator';
document.body.appendChild(div);

var inputArea = document.createElement('input');
inputArea.id = 'inputArea';
div.appendChild(inputArea);



var buttons = ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','C','/','(',')','Del','='];

buttons.forEach(makeButton);

function makeButton(text) {
    var button = document.createElement('button');
    button.id = 'button' + text;
    button.textContent = text;
    div.appendChild(button);
    button.addEventListener("click", buttonPress, false);
}

function buttonPress(event) {
    var buttonValue = event.target.textContent;
    var inputArea = document.getElementById('inputArea');
    
    switch (buttonValue) {
        
        case '=':
            inputArea.value = math.eval(inputArea.value);
            break;    
        
        case 'Del':
            var length = ((inputArea.value).length);
            inputArea.value = (inputArea.value).substring(0, length-1);
            break;
            
        case 'C':
            inputArea.value = '';
            break;
        
        default:
        if ((buttonValue) === '+' || (buttonValue) === '-' || (buttonValue) === '*' || (buttonValue) === '/') {
            (inputArea.value) += ' ' + (buttonValue) + ' ';
        }
        else {
            (inputArea.value) += (buttonValue);
        }
    }
}