const display = document.getElementById('display');
var result = document.getElementById('result');

// operator selectors
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const equals = document.getElementById('equals');
const allClear = document.getElementById('allclear');
const clearEntry = document.getElementById('clearentry');

// number selectors
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

// parser

const parsedAdditionExpression = (expression) => {
	const numbersString = expression.split('+');
	const numbers = numbersString.map((noStr) => parsedSubtractionExpression(noStr));
	const reducer = numbers.reduce((acc, no) => acc + no);
	return reducer;
};

const parsedSubtractionExpression = (expression) => {
	const numbersString = expression.split('-');
	const numbers = numbersString.map((noStr) => parsedDivisionExpression(noStr));
	const reducer = numbers.reduce((acc, no) => acc - no);
	return reducer;
};

const parsedDivisionExpression = (expression) => {
	const numbersString = expression.split('÷');
	const numbers = numbersString.map((noStr) => parsedMultiplicationExpression(noStr));
	const reducer = numbers.reduce((acc, no) => acc / no);
	return reducer;
};

const parsedMultiplicationExpression = (expression) => {
	const numbersString = expression.split('×');
	const numbers = numbersString.map((noStr) => +noStr);
	const reducer = numbers.reduce((acc, no) => acc * no);
	return reducer;
};

window.onload = (event) => {
	display.innerHTML = '0';
};

// number functions

one.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '1';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '1';
	}
});

two.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '2';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '2';
	}
});

three.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '3';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '3';
	}
});

four.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '4';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '4';
	}
});

five.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '5';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '5';
	}
});

six.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '6';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '6';
	}
});

seven.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '7';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '7';
	}
});

eight.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '8';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '8';
	}
});

nine.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '9';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '9';
	}
});

zero.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '0';
	} else if (display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '0';
	}
});

// operator functions

allClear.addEventListener('click', function() {
	document.querySelector('#display').innerHTML = '0';
});

clearEntry.addEventListener('click', function() {
	if (display.innerHTML === '0' || display.innerHTML.length === 1) {
		document.querySelector('#display').innerHTML = '0';
	} else {
		var displayStr = document.querySelector('#display').innerHTML;
		displayStr = displayStr.slice(0, -1);
		document.querySelector('#display').innerHTML = displayStr;
	}
});

add.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '0';
	} else if (display.innerHTML.match(/[\+\-\×\÷]$/) || display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '+';
	}
});

subtract.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '-';
	} else if (display.innerHTML.match(/[\+\-\×\÷]$/) || display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '-';
	}
});

multiply.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '0';
	} else if (display.innerHTML.match(/[\+\-\×\÷]$/) || display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '×';
	}
});

divide.addEventListener('click', function() {
	if (display.innerHTML === '0') {
		document.querySelector('#display').innerHTML = '0';
	} else if (display.innerHTML.match(/[\+\-\×\÷]$/) || display.innerHTML.length >= 8) {
		document.querySelector('#display').innerHTML;
	} else {
		document.querySelector('#display').innerHTML += '÷';
	}
});

equals.addEventListener('click', function() {
	if (display.innerHTML != '0') {
		const expression = display.innerHTML;
		const result = parsedAdditionExpression(expression);
		var regex = RegExp(/\./);

		if (regex.test(result)) {
			const isDecimalValue = result.toFixed(2);
			display.innerHTML = isDecimalValue;
		} else {
			display.innerHTML = result;
		}
	}
});
