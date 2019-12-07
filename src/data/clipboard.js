
const calcButtons = document.querySelectorAll('.calc_button')
calcButtons.forEach(button => {
	button.addEventListener('click', e => {
		console.log(e.target.dataset.val)
	})
})