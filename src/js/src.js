import {Atropos} from '../../node_modules/atropos/atropos.min.mjs';
import {Swiper} from '../../node_modules/swiper/swiper-bundle.min.mjs';

//charts
let chart2;
//Options
const getOptionChart2 = ()=> {
    return {
        title:{
            text:''
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ]
            }
        ]
    }
}

//init
function initCharts(){
    console.time('chartsLoad');
    chart2 = echarts.init(document.getElementById('chart2'));
    chart2.setOption(getOptionChart2());
    console.timeEnd('chartsLoad');
}

document.addEventListener('DOMContentLoaded', function(){
    initCharts();
});

window.addEventListener('resize', function(){
    chart2.resize();
});

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
// db logos
var aLogo = Atropos({
    el: '.db-logo1',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.db-logo2',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.db-logo3',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.db-logo4',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.db-logo5',
    activeOffset:0,
    highlight: false,
    shadow: false
});

// Tools
var aLogo = Atropos({
    el: '.tool-logo1',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo2',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo3',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo4',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo5',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo6',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo7',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo8',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo9',
    activeOffset:0,
    highlight: false,
    shadow: false
});
var aLogo = Atropos({
    el: '.tool-logo10',
    activeOffset:0,
    highlight: false,
    shadow: false
});

var aMobile = Atropos({
    el: '.a-mobile',
    activeOffset:80,
    shadow: false
});

//Swiper
var swiper = new Swiper(".Swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    // freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 3000
    },
    loop: true,
});

var reverseSwiper = new Swiper(".revSw", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 3000,
        reverseDirection: true,
    },
    loop: true,
});



