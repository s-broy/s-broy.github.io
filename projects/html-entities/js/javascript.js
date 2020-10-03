const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
	document.body.classList.toggle('dark', e.target.checked)
})

document.body.addEventListener('click', ({ target }) => {
  if (
    target.nodeName.toLowerCase() !== 'textarea' ||
    !target.classList.contains('parent')
  ) { return }
  navigator.clipboard.writeText(target.textContent) 
	
	target.nextElementSibling.nextElementSibling.classList.toggle('hidden')
	target.nextElementSibling.nextElementSibling.classList.add('tooltip')

	window.setTimeout(_ => {
		target.nextElementSibling.nextElementSibling.classList.toggle('hidden')
	}, 500)
})