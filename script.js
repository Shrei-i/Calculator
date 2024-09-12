var sign;
function action(operator){
    let variable1=document.getElementById('input').value;
    sign = document.getElementById(operator).value;
    document.getElementById('input').value=variable1+sign;
}

function get_variables(){
    let expression = document.getElementById('input').value;
    let sign_num = expression.indexOf(sign);
    let a = +expression.slice(0, sign_num);
    let b = +expression.slice(sign_num+1);
    return [a, b, expression];
}
function update_history(expression, number){
    let history=document.getElementById('history').innerHTML;
    document.getElementById('history').innerHTML=expression+'='+number+'<br>'+history+'<br>';
}
function calculation(){
    let [a, b, expression] = get_variables();
    let number;
    switch (sign){
        case '+':
            number = a+b;
            break;
        case '-':
            number = a-b;
            break;
        case '*':
            number = a*b;
            break;
        case '/':
            number = a/b;
            break;
        }
    update_history(expression, number);
    document.getElementById('input').value=number;
    return number;
    }

function output_number(id){
    let value = document.getElementById('input').value
    document.getElementById('input').value=value+document.getElementById(id).innerHTML
}

function reset_form(){
    document.getElementById('input').value='';
}
