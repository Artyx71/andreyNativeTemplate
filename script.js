const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const totalLength = slide.length
let index = 0
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slideWidth = slide[0].clientWidth

next.addEventListener('click', () => {
	index++
	if (index >= totalLength) {
		index = 0
	}
	updateSlide()
})

prev.addEventListener('click', () => {
	index--
	if (index < 0) {
		index = totalLength - 1
	}
	updateSlide()
})

function updateSlide() {
	slides.style.transform = `translateX(-${index * slideWidth}px)`
}

setInterval(() => {
	nextSlide()
}, 3000)
