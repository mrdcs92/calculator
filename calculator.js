/*
<button> elements for the buttons, <button>7</button>
<input> element for the display

.value changes contents of the display
*/

var iC = document.querySelector('#insertCalculator');

var inputArea = document.createElement('input');
inputArea.id = 'inputArea';
iC.appendChild(inputArea);

var buttons = ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','=','/','(',')','Del','C'];

function makeButton(text) {
    var button = document.createElement('button');
    button.id = 'button' + text;
    button.textContent = text;
    iC.appendChild(button);
    button.addEventListener("click", buttonPress, false);
}

buttons.forEach(makeButton);

function buttonPress(event) {
    console.log(event.target.innerHTML);
    switch (event.target.innerHTML) {
        
        case '0':
           document.getElementById('inputArea').value += '0';
            break;
        
        case '1':
            document.getElementById('inputArea').value += '1';
            break;
        
        case '2':
            document.getElementById('inputArea').value += '2';
            break;
            
        case '3':
            document.getElementById('inputArea').value += '3';
            break;
            
        case '4':
            document.getElementById('inputArea').value += '4';
            break;
            
        case '5':
            document.getElementById('inputArea').value += '5';
            break;
            
        case '6':
            document.getElementById('inputArea').value += '6';
            break;
        
        case '7':
            document.getElementById('inputArea').value += '7';
            break;
            
        case '8':
            document.getElementById('inputArea').value += '8';
            break;
            
        case '9':
            document.getElementById('inputArea').value += '9';
            break;
            
        case '+':
            document.getElementById('inputArea').value += ' + ';
            break;
            
        case '-':
            document.getElementById('inputArea').value += ' - ';
            break;
            
        case '*':
            document.getElementById('inputArea').value += ' * ';
            break;
            
        case '/':
            document.getElementById('inputArea').value += ' / ';
            break;
            
        case '.':
            document.getElementById('inputArea').value += '.';
            break;
        
        case '=':
            document.getElementById('inputArea').value = math.eval(document.getElementById('inputArea').value);
            break;    
        
        case '(':
            document.getElementById('inputArea').value += '(';
            break;
            
        case ')':
            document.getElementById('inputArea').value += ')';
            break;
            
        case 'Del':
            // need to delete last character from string
            var length = (document.getElementById('inputArea').value).length);
            break;
            
        case 'C':
            document.getElementById('inputArea').value = '';
            break;
        
        default:
            // code
    }
}

//inputArea.innerHTML = 

/*
var inputArea = document.createElement('input');
inputArea.id = 'inputArea';

var calcTable = document.createElement('table');
calcTable.id = 'calcTable';

var firstRow = document.createElement('tr');
calcTable.appendChild(firstRow);
firstRow.id = 'firstRow';

var data1 = document.createElement('td');
firstRow.appendChild(data1);
data1.id = 'data1';

var button1 = document.createElement('button');
data1.appendChild(button1);
button1.textContent = '1';
button1.id = 'button1';

var data2 = document.createElement('td');
firstRow.appendChild(data2);
data2.id = 'data2';

var button2 = document.createElement('button');
data2.appendChild(button2);
button2.textContent = '2';
button2.id = 'button2';

var data3 = document.createElement('td');
firstRow.appendChild(data3);
data3.id = 'data3';

var button3 = document.createElement('button');
data3.appendChild(button3);
button3.textContent = '3';
button3.id = 'button3';

var dataDivide = document.createElement('td');
firstRow.appendChild(dataDivide);
dataDivide.id = 'dataDivide';

var buttonDivide = document.createElement('button');
dataDivide.appendChild(buttonDivide);
buttonDivide.textContent = '/';
buttonDivide.id = 'buttonDivide';

var secondRow = document.createElement('tr');
calcTable.appendChild(secondRow);
secondRow.id = 'secondRow';

var data4 = document.createElement('td');
secondRow.appendChild(data4);
data4.id = 'data4';

var button4 = document.createElement('button');
data4.appendChild(button4);
button4.textContent = '4';
button4.id = 'button4';

var data5 = document.createElement('td');
secondRow.appendChild(data5);
data5.id = 'data5';

var button5 = document.createElement('button');
data5.appendChild(button5);
button5.textContent = '5';
button5.id = 'button5';

var data6 = document.createElement('td');
secondRow.appendChild(data6);
data6.id = 'data6';

var button6 = document.createElement('button');
data6.appendChild(button6);
button6.textContent = '6';
button6.id = 'button6';

var dataMultiply = document.createElement('td');
secondRow.appendChild(dataMultiply);
dataMultiply.id = 'dataMultiply';

var buttonMultiply = document.createElement('button');
dataMultiply.appendChild(buttonMultiply);
buttonMultiply.textContent = '*';
buttonMultiply.id = 'buttonMultiply';

var thirdRow = document.createElement('tr');
calcTable.appendChild(thirdRow);
thirdRow.id = 'thirdRow';

var data7 = document.createElement('td');
thirdRow.appendChild(data7);
data7.id = 'data7';

var button7 = document.createElement('button');
data7.appendChild(button7);
button7.textContent = '7';
button7.id = 'button7';

var data8 = document.createElement('td');
thirdRow.appendChild(data8);
data8.id = 'data8';

var button8 = document.createElement('button');
data8.appendChild(button8);
button8.textContent = '8';
button8.id = 'button8';

var data9 = document.createElement('td');
thirdRow.appendChild(data9);
data9.id = 'data9';

var button9 = document.createElement('button');
data9.appendChild(button9);
button9.textContent = '9';
button9.id = 'button9';

var dataSubtract = document.createElement('td');
thirdRow.appendChild(dataSubtract);
dataSubtract.id = 'dataSubtract';

var buttonSubtract = document.createElement('button');
dataSubtract.appendChild(buttonSubtract);
buttonSubtract.textContent = '-';
buttonSubtract.id = 'buttonSubtract';

var fourthRow = document.createElement('tr');
calcTable.appendChild(fourthRow);
fourthRow.id = 'fourthRow';

var data0 = document.createElement('td');
fourthRow.appendChild(data0);
data0.id = 'data0';

var button0 = document.createElement('button');
data0.appendChild(button0);
button0.textContent = '0';
button0.id = 'button0';

var dataPoint = document.createElement('td');
fourthRow.appendChild(dataPoint);
dataPoint.id = 'dataPoint';

var buttonPoint = document.createElement('button');
dataPoint.appendChild(buttonPoint);
buttonPoint.textContent = '.';
buttonPoint.id = 'buttonPoint';

var dataClear = document.createElement('td');
fourthRow.appendChild(dataClear);
dataClear.id = 'dataClear'; 

var buttonClear = document.createElement('button');
dataClear.appendChild(buttonClear);
buttonClear.textContent = 'C';
buttonClear.id = 'buttonClear';

var dataAdd = document.createElement('td');
fourthRow.appendChild(dataAdd);
dataAdd.id = 'dataAdd'; 

var buttonAdd = document.createElement('button');
dataAdd.appendChild(buttonAdd);
buttonAdd.textContent = '+';
buttonAdd.id = 'buttonAdd';
*/


/*
iC.appendChild(inputArea);
iC.appendChild(calcTable);
*/


