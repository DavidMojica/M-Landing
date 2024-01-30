import {Atropos} from '../../node_modules/atropos/atropos.min.mjs';
import {Swiper} from '../../node_modules/swiper/swiper-bundle.min.mjs';

const anioActual = new Date().getFullYear();
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

//charts
let chart1;
let chart2;
//Options
// bar
const getOptionChart1 = ()=> {
    return {
        title: {
            text: 'Promedio de ventas por día',
            subtext: anioActual,
            x: 'center',
        },
        xAxis: {
            type: 'category',
            data: diasSemana
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                data: [45, 32, 54, 72, 69, 24, 10],
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    // Puedes especificar colores diferentes para cada barra aquí
                    color: function(params) {
                        var colorList = ['#FFC107', '#4CAF50', '#2196F3', '#FF5722', '#E91E63', '#9C27B0', '#795548'];
                        return colorList[params.dataIndex];
                    }
                }
            }
        ]
    };
};
// pie
const getOptionChart2 = ()=> {
    return {
        title:{
            text:`Ventas totales por sexo`,
            subtext:anioActual ,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            top: '5%',
            left: 'center',
            data: ['Mujeres', 'Hombres']
        },
        legend: {
            bottom: '5%',
            left: 'center'
        },
        series: [
            {
              name: 'Sexo',
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
                position: 'center',
                formatter: '{b}: {d}%'
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
                {
                    value: 2512,
                    name: 'Mujeres',
                    itemStyle: {
                      color: '#F59ABE'
                    }
                },
                {
                    value: 1712,
                    name: 'Hombres',
                    itemStyle: {
                      color: '#7DB4EA'
                    }
                }
              ]
            }
        ]
    }
}

//init
function initCharts(){
    console.time('chartsLoad');
    chart1 = echarts.init(document.getElementById('chart1'));
    chart1.setOption(getOptionChart1());
    chart2 = echarts.init(document.getElementById('chart2'));
    chart2.setOption(getOptionChart2());
    console.timeEnd('chartsLoad');
}

document.addEventListener('DOMContentLoaded', function(){
    initCharts();
});

window.addEventListener('resize', function(){
    chart1.resize();
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



