import {Atropos} from '../../node_modules/atropos/atropos.min.mjs';
import {Swiper} from '../../node_modules/swiper/swiper-bundle.min.mjs';

const anioActual = new Date().getFullYear();
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

//charts
let chart1;
let chart2;
let chart3;
let chart4;
let chart5;
//Options
// bar
const getOptionChart1 = ()=> {
    return {
      darkmode: true,
      title: {
          text: 'Promedio de ventas por día',
          subtext: anioActual,
          x: 'center',
          top: '2%',
          textStyle:{
            textBorderColor: '#ffffff', 
            textBorderWidth: 2 
          }
      },
      xAxis: {
          type: 'category',
          data: diasSemana,
          axisLabel: {
            textStyle: {
              textBorderColor: '#ffffff', 
              textBorderWidth: 2 
            }
          }
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
            x: 'center',
            top: '2%',
            textStyle:{
              textBorderColor: '#ffffff', 
              textBorderWidth: 2 
            }
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
            left: 'center',
            textStyle:{
              textBorderColor: '#ffffff', 
              textBorderWidth: 2 
            }
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
//flower
const getOptionChart3 = ()=> {
    return {
        title:{
          top: '5%',
          text:`Ventas totales por producto`,
          subtext:anioActual ,
          x: 'center',
          textStyle:{
            textBorderColor: '#ffffff', 
            textBorderWidth: 2 // Ancho del borde blanco alrededor del texto
          }
        },
        legend: {
          top: 'bottom',
          textStyle:{
            textBorderColor: '#ffffff', // Borde blanco alrededor del texto
            textBorderWidth: 2 // Ancho del borde blanco alrededor del texto
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
          }
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 400, name: 'Teléfonos' },
              { value: 380, name: 'Laptops' },
              { value: 324, name: 'Auriculares' },
              { value: 305, name: 'Tabletas' },
              { value: 287, name: 'Cámaras' },
              { value: 265, name: 'Smartwatches' },
              { value: 224, name: 'Consolas' },
              { value: 187, name: 'Electrodomésticos' }
            ]
          }
        ]
    }
}

//Stacked Data
const rawData = [
    [42, 32, 31, 20, 59, 60, 10],
    [20, 10, 13, 14, 28, 23, 4],
    [15, 18, 19, 23, 29, 30, 6],
    [4, 2, 1, 3, 6, 3, 1],
    [18, 16, 20, 24, 42, 38, 4]
  ];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
let sum = 0;
for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
}
totalData.push(sum);
}
const grid = {
left: 100,
right: 100,
top: 50,
bottom: 50
};
const series = [
'Teléfonos',
'Laptops',
'Auriculares',
'Tabletas',
'Cámaras'
].map((name, sid) => {
    return {
      name,
      type: 'bar',
      stack: 'total',
      barWidth: '60%',
      label: {
        show: true,
        formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
      },
      data: rawData[sid].map((d, did) =>
        totalData[did] <= 0 ? 0 : d / totalData[did]
      )
    };
});
const getOptionChart4 = ()=> {
    return {
        title:{
            text:`Ventas de productos por día`,
            subtext:anioActual ,
            x: 'center',
            top: '2%',
            textStyle:{
              textBorderColor: '#ffffff', // Borde blanco alrededor del texto
              textBorderWidth: 2 // Ancho del borde blanco alrededor del texto
            }
        },
        legend: {
        bottom: '0%',
        left: 'center',
        textStyle:{
          textBorderColor: '#ffffff', // Borde blanco alrededor del texto
          textBorderWidth: 2 // Ancho del borde blanco alrededor del texto
        }
        },
        grid,
        yAxis: {
        type: 'value'
        },
        xAxis: {
        type: 'category',
        data: diasSemana,
        axisLabel: {
          textStyle: {
            color: '#fff',
            textBorderColor: '#ffffff', // Borde blanco alrededor del texto
            textBorderWidth: 2 // Ancho del borde blanco alrededor del texto
          }
        }
        },
        series
    };
}

const getOptionChart5 = ()=> {
    return {
        title: {
          text: 'Captación general de los usuarios',
          x: 'center',
          top: '2%',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        legend: {
          data: ['Inicio de sesión', 'Exploran el catálogo', 'Consultan detalles de un producto', 'Añaden el producto al carrito', 'Compra del producto'],
          bottom: '0%',
          left: 'center'
        },
        series: [
          {
            name: 'Captación',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
            { value: 100, name: 'Inicio de sesión' },
            { value: 80, name: 'Exploran el catálogo' },
            { value: 60, name: 'Consultan detalles de un producto' },
            { value: 40, name: 'Añaden el producto al carrito' },
            { value: 20, name: 'Compra del producto' },
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
    chart3 = echarts.init(document.getElementById('chart3'));
    chart3.setOption(getOptionChart3());
    chart4 = echarts.init(document.getElementById('chart4'));
    chart4.setOption(getOptionChart4());
    chart5 = echarts.init(document.getElementById('chart5'));
    chart5.setOption(getOptionChart5());
    console.timeEnd('chartsLoad');
}

window.addEventListener('resize', function(){
    chart1.resize();
    chart2.resize();
    chart3.resize();
    chart4.resize();
    chart5.resize();
});

document.addEventListener('DOMContentLoaded', function(){
    initCharts();
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



