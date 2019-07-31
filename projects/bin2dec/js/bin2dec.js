const button = document.querySelector('#button');
const binary = document.querySelector('#binary');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
	const binaryParsed = parseInt(binary.value, 2);
	console.log(binaryParsed);
	let binaryLength = binary.value.length;
	if (isNaN(binaryParsed)) {
		document.input.result.value = 'Only 0s and/or 1s';
	} else if (binaryLength < 8 + 1) {
		document.input.result.value = binaryParsed;
	} else {
		document.input.result.value = '8 digits or less';
	}
});
