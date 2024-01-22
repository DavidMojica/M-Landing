import {Atropos} from '../../node_modules/atropos/atropos.min.mjs';
import {Swiper} from '../../node_modules/swiper/swiper-bundle.min.mjs';

// Atropos
const nightScene =  Atropos({
    el: '.a-night',
    activeOffset: 100,
});

const dayScene = Atropos({
    el: '.a-day',
    activeOffset: 100,
});

var aLogo = Atropos({
    el: '.lang-logo1',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo2',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo3',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo4',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo5',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo6',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo7',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo8',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.lang-logo9',
    activeOffset:0,
    highlight: false,
    shadow: false
});


//Swiper
var swiper = new Swiper(".Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    // freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay:{
    //     delay: 2000
    // },
    loop: true,
});

var reverseSwiper = new Swiper(".revSw", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay:{
    //     delay: 2000,
    //     reverseDirection: true,
    // },
    loop: true,
});



