function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}){
  //================================================
//slider
//================================================

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');
    // let  slideIndex = 1;

    // showSlids(slideIndex);

    // if(slides.length < 10){
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlids(n){
    //     if(n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if(n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if(slides.length < 10){
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n){
    //     showSlids(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

//================================================
//slider carousel
//================================================

const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width, //ширина окна слайдера
        slidesField = document.querySelector(field); //ширина окна слайдера
let  slideIndex = 1;
let offset = 0;

if(slides.length < 10){
total.textContent = `0${slides.length}`;
current.textContent = `0${slideIndex}`;
} else {
total.textContent = slides.length;
current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%'; //ширина всех слайдов
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

// все слайды одинаковой ширины
slides.forEach(slide => slide.style.width = width);

//точки
slider.style.position = 'relative';

const dots = document.createElement('ol'),
dotsMas = [];

dots.classList.add('carousel-indicators');
dots.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;
slider.append(dots);

for(let i = 0; i < slides.length; i++){
const dot = document.createElement('li');
dot.setAttribute('data-slide-to', i + 1);
dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
`;
if(i == 0){
    dot.style.opacity = 1;
}
dots.append(dot);
dotsMas.push(dot);
}

next.addEventListener('click', () => {
//если долистали до конца
if(offset == replaceWidth(width) * (slides.length - 1)){
    offset = 0;
} else {
    //листаем на ширину 1 слайда
    offset += replaceWidth(width);
}

transform(slidesField, offset);

if(slideIndex == slides.length){
    slideIndex = 1;
} else {
    slideIndex ++;
}

slideLengthLess(slides, current);

dotsMas.forEach(dot => dot.style.opacity = '.5');
dotsMas[slideIndex - 1].style.opacity = 1;
});

prev.addEventListener('click', () => {
if(offset == 0){
    offset = replaceWidth(width) * (slides.length - 1);
} else {
    offset -= replaceWidth(width);
}

transform(slidesField, offset);

if(slideIndex == 1){
    slideIndex = slides.length;
} else {
    slideIndex --;
}

slideLengthLess(slides, current);

dotsMas.forEach(dot => dot.style.opacity = '.5');
dotsMas[slideIndex - 1].style.opacity = 1;
});

//точки
dotsMas.forEach(dot => {
dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to');

    slideIndex = slideTo;
    offset = replaceWidth(width) * (slideTo - 1);

    transform(slidesField, offset);

    slideLengthLess(slides, current);

    dotsMas.forEach(dot => dot.style.opacity = '.5');
    dotsMas[slideIndex - 1].style.opacity = 1;
});
});

//+width.replace(/\D/g, '') = вырезаем все не числа и превращаем в число
function replaceWidth(t){
return +t.replace(/\D/g, '');
}

function slideLengthLess(s, c){
if(s.length < 10){
    c.textContent = `0${slideIndex}`;
} else{
    c.textContent = slideIndex;
}
}

function transform(elem, transf){
elem.style.transform = `translateX(-${transf}px)`;
}
}

export default slider;

