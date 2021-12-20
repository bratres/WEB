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
const up = document.querySelector('.up')
const down = document.querySelector('.down')
let yes = new Audio('audio/yes.wav')
let no = new Audio('audio/no.wav')
let password
let x
let hiddenPassword = ''
let z = 0
let s = 0
let point

start.addEventListener('click', function (e) {
	password = input.value.toLowerCase()
	curtain.classList.add('hidden')
	start.classList.add('hidden')
	password.classList.remove('ghost')
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
		point = 0
		for (let i = 0; i < password.length; i++) {
			if (letter.textContent == password.charAt(i)) {
				letter.classList.add('correct')
				div.textContent =
					div.textContent.slice(0, i) + password.charAt(i) + div.textContent.slice(i + 1, password.length)
				z++
				point = 1
			} else {
				letter.classList.add('wrong')
			}
		}
		if (point == 0) {
			s++
			photo.setAttribute('src', `img/s${s}.jpg`)
		}
		if (z == x) {
			setTimeout(function () {
				win.style.top = '330px'
				win.classList.remove('ghost')
				section.classList.add('hidden')
				photo.classList.add('hidden')
				up.classList.remove('ghost')
				down.classList.remove('ghost')
			}, 700)
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
	password.classList.add('ghost')
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
	win.style.top = '100%'
	win.classList.add('ghost')
	up.classList.add('ghost')
	down.classList.add('ghost')
	div.classList.add('ghost')
	setTimeout(function () {
		div.textContent = 'Ola'
		div.classList.remove('ghost')
		div.style.top = '50%'
		div.style.transform = 'translateY(-50%)'
	}, 1300)
})
