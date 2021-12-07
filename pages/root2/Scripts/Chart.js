document.addEventListener('DOMContentLoaded', ()=>{
  var options = {
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#myChart"), options);
  chart.render();
})





let options = {
    // title: {
    //     text: "Column Chart in jQuery CanvasJS",
    // },
    data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            color: "#109CF1",
            dataPoints: [
                { label: "1.06", y: 90 },
                { label: " ", y: 65 },
                { label: " ", y: 20 },
                { label: " ", y: 38 },
                { label: "8.06  ", y: 5 },
                { label: " ", y: 12 },
                { label: " ", y: 47 },
                { label: " ", y: 76 },
                { label: "16.06", y: 69 },
                { label: " ", y: 128 },
                { label: "30.06", y: 165 },
                { label: " ", y: 97 },
            ],
        },
    ],
};
// console.log(CanvasJSChart);
// $("#chartContainer").CanvasJSChart(options);



var options11 = {
  series: [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 350,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};
let chrtNew = document.querySelector("#chartnew");
console.log(chrtNew);
var chart11 = new ApexCharts(chrtNew, options11);
chart11.render();


var optionsPie1 = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
  width: '150%',
  type: 'pie',
},
labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
theme: {
  monochrome: {
    enabled: true
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  text: ""
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
}
};

var chartPie1 = new ApexCharts(document.querySelector("#chartContainer2"), optionsPie1);
chartPie1.render();


var optionsPie2 = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
  width: '150%',
  type: 'pie',
},
labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
theme: {
  monochrome: {
    enabled: true
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  text: ""
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
}
};

var chartPie2 = new ApexCharts(document.querySelector("#chartContainer3"), optionsPie2);
chartPie2.render();





var optionsPie3 = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
  width: '150%',
  type: 'pie',
},
labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
theme: {
  monochrome: {
    enabled: true
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  text: ""
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
}
};

var chartPie3 = new ApexCharts(document.querySelector("#chartContainer4"), optionsPie3);
chartPie3.render();


var optionsPie4 = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
  width: '150%',
  type: 'pie',
},
labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
theme: {
  monochrome: {
    enabled: true
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  text: ""
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
}
};

var chartPie4 = new ApexCharts(document.querySelector("#chartContainer5"), optionsPie4);
chartPie4.render();