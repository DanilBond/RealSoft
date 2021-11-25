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
