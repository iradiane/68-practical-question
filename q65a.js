function add(num1, num2) { 
	return num1 + num2; 
} 
function subtract(num1, num2) { 
	return num1 - num2; 
} 
function multiply(num1, num2) { 
	return num1 * num2; 
}  
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
}
let operation = '+'; 

let num1 = 4; 
let num2 = 5;
let result; 
switch (operation) { 
	case "+": 
		result = add(num1, num2); 
		break; 
	case "-": 
		result = subtract(num1, num2); 
		break; 
	case "*": 
		result = multiply(num1, num2); 
		break; 
	case "/": 
		result = divide(num1, num2); 
		break; 
	default: 
		result = "Invalid operation"; 
} 
console.log("The Result of this operation is : " + result);
