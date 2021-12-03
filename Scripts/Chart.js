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
console.log($("#chartContainer"));

var root = am5.Root.new("chartContainer2");

root.setThemes([am5themes_Animated.new(root)]);

var chart = root.container.children.push(am5percent.PieChart.new(root, {}));

// Define data
var data = [
    {
        country: "France",
        sales: 100000,
    },
    {
        country: "Spain",
        sales: 160000,
    },
    {
        country: "United Kingdom",
        sales: 80000,
    },
];

// Create series
var series = chart.series.push(
    am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
    })
);

series.data.setAll(data);

// Disabling labels and ticks
series.labels.template.set("visible", false);
series.ticks.template.set("visible", false);

////////////////////////////////////

var root2 = am5.Root.new("chartContainer3");

root2.setThemes([am5themes_Animated.new(root2)]);

var chart2 = root2.container.children.push(am5percent.PieChart.new(root2, {}));

// Define data
var data2 = [
    {
        country: "France",
        sales: 100000,
    },
    {
        country: "Spain",
        sales: 160000,
    },
    {
        country: "United Kingdom",
        sales: 80000,
    },
];

// Create series
var series2 = chart2.series.push(
    am5percent.PieSeries.new(root2, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
    })
);

series2.data.setAll(data2);

// Disabling labels and ticks
series2.labels.template.set("visible", false);
series2.ticks.template.set("visible", false);

//////////////////////////////

var root3 = am5.Root.new("chartContainer4");

root3.setThemes([am5themes_Animated.new(root3)]);

var chart3 = root3.container.children.push(am5percent.PieChart.new(root3, {}));

// Define data
var data3 = [
    {
        country: "France",
        sales: 100000,
    },
    {
        country: "Spain",
        sales: 160000,
    },
    {
        country: "United Kingdom",
        sales: 80000,
    },
];

// Create series
var series3 = chart3.series.push(
    am5percent.PieSeries.new(root3, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
    })
);

series3.data.setAll(data3);

// Disabling labels and ticks
series3.labels.template.set("visible", false);
series3.ticks.template.set("visible", false);

///////////////////////////////////////

var root4 = am5.Root.new("chartContainer5");

root4.setThemes([am5themes_Animated.new(root4)]);

var chart4 = root4.container.children.push(am5percent.PieChart.new(root4, {}));

// Define data
var data4 = [
    {
        country: "France",
        sales: 100000,
    },
    {
        country: "Spain",
        sales: 160000,
    },
    {
        country: "United Kingdom",
        sales: 80000,
    },
];

// Create series
var series4 = chart4.series.push(
    am5percent.PieSeries.new(root4, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
    })
);

series4.data.setAll(data4);

// Disabling labels and ticks
series4.labels.template.set("visible", false);
series4.ticks.template.set("visible", false);
