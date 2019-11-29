// const CARDINAL = [{
//     "N": 0,
//     "NNE": 20,
//     "NE": 45,
//     "ENE": 70,
//     "E": 90,
//     "ESE": 110,
//     "SE": 135,
//     "SSE": 160,
//     "S": 180,
//     "SSW": 205,
//     "SW": 225,
//     "WSW": 245,
//     "W": 270,
//     "WNW": 295,
//     "NW": 315,
//     "NNW": 335
// }]

// class WindDirections {
//     constructor() {
//         this.allStations = [
//             [37.875271, -122.597703],
//             [37.882356, -122.282195],
//             [37.677214, -122.495821],
//             [37.705890, -122.157217]
//         ]
//         this.windDir = {}
//         this.promises = []

//         this.getWeather()
//         this.formatData()
//     }

//     getWeather() {
//         this.allStations.forEach(async (el) => {
//             let that = this
//             const res = await fetch(`http://api.weather.gov/points/${el}/forecast/hourly`)
//                 .then((res) => {
//                     debugger
//                     this.promises.push({
//                         data: res.data.properties
//                     })
//                 })

//             console.log(this.promises)

//         })
//     }

//     formatData() {
//         this.promises.forEach((el) => {
//             let length = el.data.periods
//             let dir = el.data.periods[length - 1].windDirection
//             this.windDir[promises.indexOd(el)] = dir
//         })
//     }

// }

// module.exports = WindDirections


        // function drawLines() {


            //working line draw     
            // function runTransition() {
            //     var pathTrans = d3.selectAll("path").transition().style("color", "white")
            //     pathTrans.attr("transform", "translate(0, 800)").duration(10000)

            // }


            // const bd = document.querySelector('#body')
            // var height = bd.style.height
            // var width = bd.style.width

            // var lineData = [ 
            //     { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
            //     { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
            //     { "x": 80,  "y": 5},  { "x": 100, "y": 800}
            // ];
            // debugger
            // var lineFunction = d3.line()
            //     .x(function(d) {return d.x})
            //     .y(function(d) {return d.y})
            //     .curve(d3.curveBasis)

            // var svgContainer = d3.select("body").append("svg")
            //     .attr("width", width)
            //     .attr("height", height)

                //testing gradient

        //     var svg = d3.select("line")
        //         .append("svg")
        //         .attr("width", width)
        //         .attr("height", height)
        //         .attr("id", "visualization")


        //     var x = d3.scale.linear().domain([0, 500]).range([0, width]);
        //     var y = d3.scale.linear().domain([0, 500]).range([10, height - 10])

        //     var line = d3.line()
        //         .x(function(d, i) {return x(i)})
        //         .y(function(d) {return y(d)})
        //         .curve(d3.curveNatural)

        //     let repeat = () => {
        //         var data = d3.range(11).map(function(){return Math.random()*10})

        //         svg.selectAll("path").attr("class", "old");

        //         var path = svg.append("path")
        //             .attr("d", line(data))
        //             .attr("stroke", "white")
        //             .attr("stroke-width", 2)
        //             .attr("fill", "none")

        //         debugger

        //         var totalLength = path.node

        //         path
        //             .attr("stroke-dasharray", totalLength + " " + totalLength)
        //             .attr("stroke-dashoffset", totalLength)
        //             .transition()
        //                 .duration(4000)
        //                 .ease(d3.easeLinear)
        //                 .attr("stroke-dashoffset", 0)
        //                 .on("end", repeat)
        //     }

        //     repeat()








        //     // var lineGraph = svgContainer.append("path")
        //     //     .attr("d", lineFunction(lineData))
        //     //     .attr("stroke", "blue")
        //     //     .attr("stroke-width", 2)
        //     //     .attr("fill", "none");

        //     // runTransition()

        //     var svg = d3.select('svg');

        //     var backLayer = svg.append("g");
        //     var frontLayer = svg.append("g");

        //     var dataSet = d3.range(15).map(function (d) {
        //         return {
        //             x: d * 30 + 10,
        //             y: Math.random() * 600 + 10
        //         }
        //     });

        //     var lineGenerator = d3.svg.line()
        //         .x(function (d) {
        //             return d.x
        //         })
        //         .y(function (d) {
        //             return d.y
        //         })
        //         .interpolate("monotone")

        //     function displayCircles(data) {
        //         var circle = frontLayer.selectAll(null)
        //             .data(data)
        //             .enter()
        //             .append('circle')
        //             .attr({
        //                 r: 6,
        //                 cx: function (d) {
        //                     return d.x
        //                 },
        //                 cy: function (d) {
        //                     return d.y
        //                 },
        //                 fill: 'white',
        //                 stroke: "black",
        //                 "stroke-width": "3px"
        //             });
        //     };

        //     function displayLine(data) {
        //         var line = backLayer.append("path")
        //             .datum(data)
        //             .attr({
        //                 d: lineGenerator(data),
        //                 fill: 'none',
        //                 stroke: "red",
        //                 "stroke-width": "3px",
        //                 "shape-rendering": "geometricPrecision"
        //             });

        //         var totalLength = line.node().getTotalLength();

        //         line.attr("stroke-dasharray", totalLength + " " + totalLength)
        //             .attr("stroke-dashoffset", totalLength)
        //             .transition()
        //             .duration(2000)
        //             .ease("linear")
        //             .attr("stroke-dashoffset", 0);
        //     }

        //     displayCircles(dataSet);

        //     setTimeout(function () {
        //         displayLine(dataSet)
        //     }, 1000)

        // } 

        // function returnTransition() {
        //     var pathTrans = d3.selectAll("line").transition()
        //     pathTrans.attr("transform", "translate(0, 1000)").duration(5000)
        // }








        // 