var buttons=document.getElementsByClassName("box");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}
/*operand1  will take input until an operator(/,*,- etc) is not added then operand2 will take input then when equal is pressed we have operand1 and operand2 and operator*/
for(var i=0;i<buttons.length ; i++){
    buttons[i].addEventListener('click',function(){
        var value= this.getAttribute('data-value');
        if(isOperator(value)){
        
            operator=value;
            operand1=parseFloat(display.textContent);
            var a=operand1;
            display.textContent = "";
        }
        else if(value=='ac'){
            display.textContent = "";
        }
        else if(value=='sign'){
            operand1 = parseFloat(display.textContent);
            operand1 = -1 * operand1;
            display.textContent = operand1;

        }
        else if(value=='%'){
            operand1=parseFloat(display.textContent);
            operand1=operand1/100;
            display.textContent = operand1;
        }
        else if (value == ".") {
            if (display.textContent.length && !display.textContent.includes('.')) {
                display.textContent = display.textContent + '.';
            }
        }
        else if(value=='='){
            operand2=parseFloat(display.textContent);
            //use eval to get result;
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else{
            display.innerText += value;
        }
    });
}