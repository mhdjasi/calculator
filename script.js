//1. display numbers in textbox

function displayNum(num){
input.value +=num
}

//2. clear content in text box

function clearBox(){
    input.value=""
}

//3. evaluatev expression

function evaluateExpr(){
    input.value=eval(input.value)
    
}

//4. remove last item from text box

function removeItem(){
    curExpr = input.value
    input.value=curExpr.slice(0,-1)
}