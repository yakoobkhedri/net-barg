// mobile menu

let mobileMenu=document.getElementById('mobileMenu');
let hamIcon=document.getElementById('hamIcon');

hamIcon.addEventListener('click',function () {
    mobileMenu.classList.toggle('active');
})

// swiper
var banner = new Swiper(".banner", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});