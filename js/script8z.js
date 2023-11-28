alert (" Привет, мир!");
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
sum();
multiplication();
division();
subtraction();
function sum() {
	alert(`Результат сложения: ${num1+num2}`)
}
function multiplication() {
	alert(`Результат умножения: ${num1*num2}`)
}
function division() {
	alert(`Результат деления: ${num1/num2}`)
}
function subtraction() {
	alert(`Результат вычитания: ${num1-num2}`)
}