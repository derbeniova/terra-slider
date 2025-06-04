var swiper = new Swiper(".swiper-container", {
        resistance: false,
        longSwipesRatio: .1,
        loop: true,
		speed: 1000,
		centeredSlides: true,
		navigation: {
			prevEl: ".swiper-prevEl",
			nextEl: ".swiper-nextEl"
		},
		autoplay: {
            delay: 5500
        },
        plugins: [ SwiperPluginAutoPlay, SwiperPluginNavigation ]
      });