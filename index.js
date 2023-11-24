


AOS.init();


var typed = new Typed('#element', {
    strings: ['Web Developer.', 'UX/UI  Designer.', 'Video Editer.', 'MS Office Expert.', 'Mobile Repairer.'],
    typeSpeed: 70,
});



var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        90:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
      },
  });

