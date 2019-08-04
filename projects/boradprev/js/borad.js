var borderRad = document.querySelector('.border-radius');
var borderRadOnLoad = '150px 150px 150px 150px';

window.onload = (event) => {
	borderRad.style.borderRadius = borderRadOnLoad;
	document.borderRadiusForm.borderRadiusRule.value = borderRadOnLoad;
};

document.querySelector('#borderRadiusForm').addEventListener('input', (event) => {
	event.preventDefault();
	document.querySelector('.border-radius').style.borderRadius = document.querySelector('#borderRadiusRule').value;
});

function copyButton() {
	var copyText = document.querySelector('#borderRadiusRule');
	copyText.select();
	document.execCommand('copy');
}

document.querySelector('#copyButton').addEventListener('click', copyButton);
