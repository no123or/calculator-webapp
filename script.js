function add(x,y){
    return x + y;
}
function subtract(x , y){
    return x - y;
}
function multiply(x , y){
    return x*y;
}
function modulus(x , y){
    return x / y;
}
function performOperation(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var result;

    switch (operation) {
        case "add":
            result = add(num1,num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1 , num2);
        break;
        case "modulus":
            result = modulus(num1,num2);
            break;
        default:
            result = "invalid-operation!";
            break;
    }
    document.getElementById('result').value = result;
    return false;
}