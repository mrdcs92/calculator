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
    console.log(event.target.innerHTML);
    switch (event.target.innerHTML) {
        
        case '=':
            document.getElementById('inputArea').value = math.eval(document.getElementById('inputArea').value);
            break;    
        
        case 'Del':
            var length = ((document.getElementById('inputArea').value).length);
            document.getElementById('inputArea').value = (document.getElementById('inputArea').value).substring(0, length-1);
            break;
            
        case 'C':
            document.getElementById('inputArea').value = '';
            break;
        
        default:
        if ((event.target.innerHTML) === '+' || (event.target.innerHTML) === '-' || (event.target.innerHTML) === '*' || (event.target.innerHTML) === '/') {
            (document.getElementById('inputArea').value) += ' ' + (event.target.innerHTML) + ' ';
        }
        else {
            (document.getElementById('inputArea').value) += (event.target.innerHTML);
        }
    }
}