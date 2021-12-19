const curtain = document.querySelector('.curtain')
const start = document.querySelector('body button')
const input = document.querySelector('input')
const letters = document.querySelectorAll('div button')
const div = document.querySelector('.password')
const photo = document.querySelector('img')
const section = document.querySelector('.letters')
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
const correctPassword = document.querySelectorAll('span')
const restart = document.querySelector('.restart')
const gift = document.querySelector('.gift')
const test = document.querySelector('div.hidden')
const reward = document.querySelector('.reward')
let yes = new Audio('audio/yes.wav')
let no = new Audio('audio/no.wav')
let password
let x
let hiddenPassword = ''
let z = 0
let s = 0
let a

start.addEventListener('click', function (e) {
	password = input.value.toLowerCase()
	curtain.classList.add('hidden')
	start.classList.add('hidden')
	x = password.length
	for (let i = 0; i < password.length; i++) {
		if (password.charAt(i) == ' ') {
			x -= 1
		}
	}
	for (let i = 0; i < password.length; i++) {
		if (password.charAt(i) == ' ') {
			hiddenPassword = hiddenPassword + ' '
		} else {
			hiddenPassword = hiddenPassword + '-'
		}
	}
	div.textContent = hiddenPassword
	for (const span of correctPassword) {
		span.textContent = password
	}
})

for (const letter of letters) {
	letter.addEventListener('click', function () {
		a = 0
		for (let i = 0; i < password.length; i++) {
			if (letter.textContent == password.charAt(i)) {
				letter.classList.add('correct')
				yes.play()
				div.textContent =
					div.textContent.slice(0, i) + password.charAt(i) + div.textContent.slice(i + 1, password.length)
				z++
				a = 1
			} else {
				letter.classList.add('wrong')
			}
		}
		if (a == 0) {
			no.play()
			s++
			photo.setAttribute('src', `img/s${s}.jpg`)
		}
		if (z == x) {
			win.classList.remove('hidden')
			section.classList.add('hidden')
			photo.classList.add('hidden')
		} else if (s == 9) {
			lose.classList.remove('hidden')
			section.classList.add('hidden')
			photo.classList.add('hidden')
		}
	})
}

restart.addEventListener('click', function () {
	win.classList.add('hidden')
	lose.classList.add('hidden')
	curtain.classList.remove('hidden')
	start.classList.remove('hidden')
	photo.classList.remove('hidden')
	section.classList.remove('hidden')
	for (const letter of letters) {
		letter.classList.remove('correct')
		letter.classList.remove('wrong')
	}
	z = 0
	s = 0
	photo.setAttribute('src', `img/s0.jpg`)
	hiddenPassword = ''
})

gift.addEventListener('click', function () {
	reward.style.top = '0'
	div.style.top = '250px'
})
