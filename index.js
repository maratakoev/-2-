document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector(".header").classList.toggle("open")
	})
})


// выше меню бургер, ниже слайдер


function initSlider(selector) {
	const root = document.getElementById(selector)
	console.log(root)

	// Исходные данные по слайдеру (const)
	const sliderImages = root.querySelectorAll('.slider__img'),
		sliderLine = root.querySelector('.slider__line'),
		sliderDots = root.querySelectorAll('.slider__dot'),
		sliderBtnNext = root.querySelector('.slider__btn-next'),
		sliderBtnPrev = root.querySelector('.slider__btn-prev');


	//Переменные
	let sliderCount = 0,
		sliderWidth;

	// Адаптивность слайдера
	window.addEventListener('resize', showSlide);

	//Кнопки листания слайдов вперед и назад
	sliderBtnNext.addEventListener('click', nextSlide);
	sliderBtnPrev.addEventListener('click', prevSlide);

	//Задает нужную ширину картинки и sliderLine
	function showSlide() {
		sliderWidth = 0.7 * root.querySelector('.slider').offsetWidth;
		// Проверяем ширину экрана
		var screenWidth = window.innerWidth;
		if (screenWidth <= 1140) {
			// Если ширина экрана больше или равна 1040px, увеличиваем размер слайдера
			sliderWidth *= 1.1; // Например, увеличиваем на 50%
		} sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
		sliderImages.forEach(item => item.style.width = sliderWidth + 'px')

		rollSlider();
	}
	showSlide();

	//Перелистывание вперед
	function nextSlide() {
		// console.log('next')
		sliderCount++;
		if (sliderCount >= sliderImages.length) sliderCount = 0;

		rollSlider();
		thisSlide(sliderCount);
	}

	//Перелистывание назад
	function prevSlide() {
		sliderCount--;
		if (sliderCount < 0) sliderCount = sliderImages.length - 1;

		rollSlider();
		thisSlide(sliderCount);

	}

	//Задает шаг перемещения слайдов
	function rollSlider() {
		const slideWidth = sliderImages[0].offsetWidth; // Ширина изображения
		const slideMarginRight = parseInt(getComputedStyle(sliderImages[0]).marginRight); // Половина отступа справа
		const totalSlideWidth = slideWidth + slideMarginRight;

		sliderLine.style.transform = `translateX(${-sliderCount * totalSlideWidth}px`;
	}
	//Указываем как слайд активен по счету
	function thisSlide(index) {
		sliderDots.forEach(item => item.classList.remove('active__dot'));
		sliderDots[index].classList.add('active__dot');
	}

	//Вешает клик на dot
	sliderDots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			sliderCount = index;
			rollSlider();
			thisSlide(sliderCount);
		})
	})
}

window.addEventListener("load", (event) => {
	initSlider('slider-container_1')
	initSlider('slider-container_2')
	initSlider('slider-container_3')
	initSlider('slider-container_4')
	initSlider('slider-container_5')
	initSlider('slider-container_6')
	initSlider('slider-container_7')
});


