const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const totalLength = slide.length
let index = 0
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slideWidth = slide[0].clientWidth

next.addEventListener('click', () => {
	nextSlide()
})

prev.addEventListener('click', () => {
	prevSlide()
})

function updateSlide() {
	slides.style.transform = `translateX(-${index * slideWidth}px)`
}

function nextSlide() {
	index++
	if (index >= totalSlides) {
		index = 0
	}
	updateSlide()
}

function prevSlide() {
	index--
	if (index < 0) {
		index = totalSlides - 1
	}
	updateSlide()
}

setInterval(() => {
	nextSlide()
}, 3000)
