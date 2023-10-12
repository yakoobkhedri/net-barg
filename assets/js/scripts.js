// mobile menu

let mobileMenu=document.getElementById('mobileMenu');
let hamIcon=document.getElementById('hamIcon');
let overlay=document.getElementById('overlay');

hamIcon.addEventListener('click',function () {
    mobileMenu.classList.toggle('active');
    overlay.classList.add('active');
});
overlay.addEventListener('click',function () {
    overlay.classList.remove('active');
    mobileMenu.classList.remove('active');
})

// swiper
var banner = new Swiper(".banner", {
    loop: true,
    autoplay:true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".smallImgs", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
// aos
AOS.init();