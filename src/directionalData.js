
const STARTINGPOINTS = [
    {
    south: [{x: 200, y: 400}, { x: 600, y: 400 }, {x: 200, y: 800}, {x: 600, y: 800}],
    east: [{ x: 400, y: 200 }, { x: 800, y: 200 }, { x: 400, y: 600 }, { x: 800, y: 600 }],
    west: [{ x: 0, y: 200 }, { x: 400, y: 200 }, { x: 0, y: 600 }, { x: 400, y: 600 }],
    north: [{ x: 200, y: 0 }, { x: 600, y: 0 }, { x: 200, y: 400 }, { x: 600, y: 400 }]
}
    
    
    
]

function directions(avg, windDir) {

    const bd = d3.select('body')
    var height = bd.style.height
    var width = bd.style.width
    const canv = d3.select("#map").append("svg")
        .attr("width", 800)
        .attr("height", 800)

    let data = [

    ]

    const windVals = windDir

    for(let i = 0; i < windVals.length; i++) {
        data.push(returnLine(windVals[i], i))
        



        var group = canv.append('g')
            .attr("transform", "translate(0, 0)")


        // var line = d3.svg.line()

        var line = d3.line()
            .x(function (d) { return d.x })
            .y(function (d) { return d.y })

        group.selectAll("path")
            .data([data[0]])
            .enter()
            .append("path")
            .attr("d", line)
            .transition()
                .duration(4000)
                .ease(d3.easeLinear)
                .attr("opacity", 0)
                .attr("stroke", "white")
                .attr("stroke-width", 0.6)
            


                // debugger
                
                
                
                data = []
                
                
    }
            let paths = d3.selectAll("path")
            // console.log(calculateLoss(paths, avg))
            let windDirection = directionMovement(calculateLoss(paths, avg), paths, avg)
            

            // console.log("windDirection")
            // console.log(windDirection)
            windDirection.forEach((l) => {
                // let length = Math.ceil(l.length / 4)

                let datum = []
                datum.push(l)
                // console.log(l)
                // let datum2 = []

                // datum1 = l.slice(0, length)
                // datum2 = l.slice(length - 1, length * 2)
                // datum3 = l.slice(length * 2 - 1, length * 3)
                // datum4 = l.slice(length * 3 - 1, length * 4)

                // datum.push(datum1)
                // datum.push(datum2)
                // datum.push(datum3)
                // datum.push(datum4)

                // let aboveAndBelow = addMoreLines(l)

                var group = canv.append('g')
                    .attr("transform", "translate(0, 0)")

                var line2 = d3.line()
                
                    .x(function (d) { return d.x })
                    .y(function (d) { return d.y })
                    // .interpolate('basis-open')
                    .curve(d3.curveBasis)



                for (let i = 0; i < datum.length; i++) {
                    let lineData = datum[i]
                    let idx = i
                    let line = canv.append("path")
                        .attr("d", line2(lineData[0]))
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
                        .attr("fill", "none")

                    let num = idx + 1
                    
                    repeat(num)


                    function repeat(num) {
                        line
                            .transition()
                            .duration(1000)
                            .attr("opacity", 0)
                            .transition()
                            .duration(1000 * num)
                            .attr("opacity", 1)
                            .on("end", () => {repeat(num)})
                    }
                }

                // var line2 = d3.svg.line()
                //     .x(function (d) { return d.x })
                //     .y(function (d) { return d.y })
                //     .interpolate('basis-open')

              

                // console.log("linedata")
                
                for (let i = 0; i < datum.length; i++) {
                    let lineData = datum[i]
                    // console.log(lineData)
                    let idx = i
                    let line = canv.append("path")
                        .attr("d", line2(lineData))
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
                        .attr("opacity", 0.25)
                        .attr("fill", "none")
            

                    if(lineData.length > 2) {
                        let dataSet = {
                            source: { x: lineData[0].x, y: lineData[0].y },
                            target: { x: lineData[lineData.length - 1].x, y: lineData[lineData.length - 1].y }
                        }

                        // let dataSet = lineData
    
                        // console.log(dataSet)
                        var link = d3.linkHorizontal()
                            .x(function (d) {
                                return d.x
                            })
                            .y(function (d) {
                                return d.y
                            })
    
                        let path = canv.append("path")
                            .attr("d", link(dataSet))
                            .style("stroke", "black")
                            .attr("opacity", 0)
                            .style("fill", "none")
    
                        function circleTransition() {
    
                            var timeCircle = canv.append("circle")
                                .attr("fill", "white")
                                .attr("r", 8);
                            repeat();
    
                            function repeat() {
                                timeCircle
                                    .attr('cx', 25)      // position the circle at 40 on the x axis
                                    .attr('cy', 25)     // position the circle at 250 on the y axis
                                    .attr("opacity", 1)
                                    .transition()        // apply a transition
                                    .duration(3000)      // apply it over 2000 milliseconds
                                    .ease(d3.easeLinear)
                                    .tween("pathTween", function () { return pathTween(path) })
                                    .transition()
                                    .duration(100)
                                    .attr("opacity", 0)
                                    .transition()
                                    .duration(200)
                                    .ease(d3.easeLinear)
                                    .tween("reverseTween", function () { return reverseTween(path) })
                                    .on("end", repeat)
    
                                // console.log(timeCircle)
    
    
                                function reverseTween(path) {
                                    var length = path.node().getTotalLength();
                                    var r = d3.interpolate(length, 0)
    
                                    return function (t) {
                                        var point = path.node().getPointAtLength(r(t))
                                        d3.select(this)
                                            .attr("cx", point.x)
                                            .attr("cy", point.y)
    
                                    }
                                }
                                function pathTween(path) {
                                    var length = path.node().getTotalLength();
                                    var r = d3.interpolate(0, length)
                                    return function (t) {
                                        var point = path.node().getPointAtLength(r(t));
                                        d3.select(this)
                                            .attr("cx", point.x)
                                            .attr("cy", point.y)
    
                                    }
                                }
                            };
    
                        };
    
                        circleTransition()
                        

                    }

                    // pushingtomaster
                    // canv.append("circle")
                    //     .attr("cx", 25)
                    //     .attr("cy", 25)
                    //     .attr("r", 25)
                    //     .transition()
                    //     .delay(250)
                    //     .duration(10000)
                    //     .tween("pathTween", function(){return pathTween(line)})

                    // function pathTween(path) {
                    //     var length = path.node().getTotalLength();
                    //     var r = d3.interpolate(0, length)
                    //     return function(t){
                    //         var point = path.node().getPointAtLength(r(t));
                    //         d3.selectAll("circle")
                    //             .attr("cx", point.x)
                    //             .attr("cy", point.y)
                    //     }

                    // }






                    // let num = idx
                    // if (idx === 0) {
                    //     num = 2
                    // }
                    // repeat(num)


                    // function repeat(num) {
                    //     line
                    //         .transition()
                    //         .duration(1000 * num - 4)
                    //         .attr("opacity", 1)
                    //         .transition()
                    //         .duration(1000)
                    //         .attr("opacity", 0)
                    //         .on("end", () => {repeat(num)})

                    // }
                }

                


                // var above = canv.append("path")
                //     .attr("d", line2(aboveAndBelow[0]))
                //     .attr("stroke", "white")
                //     .attr("stroke-width", 1.5)
                //     .attr("fill", "none")

                // var below = canv.append("path")
                //     .attr("d", line2(aboveAndBelow[1]))
                //     .attr("stroke", "white")
                //     .attr("stroke-width", 1.5)
                //     .attr("fill", "none")    
            })
            

    //         let length = Math.ceil(windDirection.length / 4)

            
            
            
    //         let datum = []
    //         let datum2 = []

    //         datum1 = windDirection.slice(0, length)
    //         datum2 = windDirection.slice(length - 1, length * 2)
    //         datum3 = windDirection.slice(length * 2 - 1, length * 3)
    //         datum4 = windDirection.slice(length * 3 - 1, length * 4)

    //         datum.push(datum1)
    //         datum.push(datum2)
    //         datum.push(datum3)
    //         datum.push(datum4)



    //         debugger
    //         let aboveAndBelow = addMoreLines(windDirection)
    //     // console.log(aboveAndBelow)
    //     var group = canv.append('g')
    //         .attr("transform", "translate(0, 0)")

    //     var line2 = d3.svg.line()
    //         .x(function (d) { return d.x })
    //         .y(function (d) { return d.y })
    //         .interpolate('basis-open')


    
    //     for (let i = 0; i < datum.length; i++) {
    //         let lineData = datum[i]
    //         let idx = i
    //         let line = canv.append("path")
    //             .attr("d", line2(lineData))
    //             .attr("stroke", "white")
    //             .attr("stroke-width", 2)
    //             .attr("fill", "none")

    //         let num = idx
    //         if (idx === 0){
    //             num = 1
    //         }
    //         repeat(num)

            
    //         function repeat(num) {
    //             line
    //                 .transition()
    //                 .duration(1000)
    //                 .attr("opacity", 0)
    //                 .attr(d3.easeLinear)
    //                 .transition()
    //                 .duration(1000 * num)
    //                 .attr("opacity", 1)
    //                 .on("end", repeat)
    //         }
    //     }

    //     var line2 = d3.svg.line()
    //         .x(function (d) { return d.x })
    //         .y(function (d) { return d.y })
    //         .interpolate('basis-open')

    // for (let i = 0; i < datum2.length; i++) {
    //     let lineData = datum2[i]
    //     let idx = i
    //     let line = canv.append("path")
    //         .attr("d", line2(lineData))
    //         .attr("stroke", "white")
    //         .attr("stroke-width", 2)
    //         .attr("fill", "none")

    //     let num = idx
    //     if (idx === 0) {
    //         num = 2
    //     }
    //     repeat(num)


    //     function repeat(num) {
    //         line
    //             .transition()
    //             .duration(2000)
    //             .attr("opacity", 0)
    //             .transition()
    //             .duration(1000 * num)
    //             .attr("opacity", 1)
    //             .on("end", repeat)

    //     }
    // }
   
    //     var above = canv.append("path")
    //         .attr("d", line2(aboveAndBelow[0]))
    //         .attr("stroke", "white")
    //         .attr("stroke-width", 1.5)
    //         .attr("fill", "none")
        
    //     var below = canv.append("path")
    //         .attr("d", line2(aboveAndBelow[1]))
    //         .attr("stroke", "white")
    //         .attr("stroke-width", 1.5)
    //         .attr("fill", "none")         
    
    

    // windDirection.forEach((path) => {
    //     let lineDatas = path
    //     let canv = d3.selectAll("svg")
    //     console.log(canv)
    //     var circle = canv.append("circle")
    //         .attr("r", 13)
    //         .attr("transform", "translate(" + lineDatas[0] + ")")
    //     transition();

    //     function transition() {
    //         circle.transition()
    //         .duration(10000)
    //         .attrTween("transform", translateAlong(l.node()))
    //         .each("end", transition)
    //     }

    //     function translateAlong(path) {
    //         var l = path.getTotalLength();
    //         return function(d, i, a) {
    //             return function(t) {
    //                 var p = lineDatas.getPointAtLength(t * l);
    //                 return "translate(" + p.x + "," + p.y + ")"    
    //             }
    //         }
    //     }
    // })

    // addMotionToPaths()
}

// function addMotionToPaths() {
//     let addToPaths = d3.selectAll("path")
//     let canv = d3.select("svg")

//     console.log("addToPaths")
//     console.log(addToPaths._groups)

//     addToPaths._groups.forEach((path) => {
//         // console.log("path")
//         // console.log(path.__data__)
//         path.forEach((node) => {
//             if (node.__data__) {
//                 let length = node.__data__.length

//                 let dataSet = {
//                     source: { x: node.__data__[0].x, y: node.__data__[0].y },
//                     target: { x: node.__data__[length - 2].x, y: node.__data__[length - 2].y }
//                 }

//                 console.log(dataSet)
//                 var link = d3.linkHorizontal()
//                     .x(function (d) {
//                         return d.x
//                     })
//                     .y(function (d) {
//                         return d.y
//                     })

//                 let path = canv.append("path")
//                     .attr("d", link(dataSet))
//                     .style("stroke", "black")
//                     .style("fill", "none")

//                 function circleTransition() {

//                     var timeCircle = canv.append("circle")
//                         .attr("fill", "steelblue")
//                         .attr("r", 20);
//                     repeat();

//                     function repeat() {
//                         timeCircle
//                             .attr('cx', 25)      // position the circle at 40 on the x axis
//                             .attr('cy', 25)     // position the circle at 250 on the y axis
//                             .attr("opacity", 1)
//                             .transition()        // apply a transition
//                             .duration(2000)      // apply it over 2000 milliseconds
//                             .ease(d3.easeLinear)
//                             .tween("pathTween", function () { return pathTween(path) })
//                             .transition()
//                             .duration(100)
//                             .attr("opacity", 0)
//                             .transition()
//                             .duration(200)
//                             .ease(d3.easeLinear)
//                             .tween("reverseTween", function () { return reverseTween(path) })
//                             .on("end", repeat)

//                         console.log(timeCircle)


//                         function reverseTween(path) {
//                             var length = path.node().getTotalLength();
//                             var r = d3.interpolate(length, 0)

//                             return function (t) {
//                                 var point = path.node().getPointAtLength(r(t))
//                                 d3.select(this)
//                                     .attr("cx", point.x)
//                                     .attr("cy", point.y)

//                             }
//                         }
//                         function pathTween(path) {
//                             var length = path.node().getTotalLength();
//                             var r = d3.interpolate(0, length)
//                             return function (t) {
//                                 var point = path.node().getPointAtLength(r(t));
//                                 d3.select(this)
//                                     .attr("cx", point.x)
//                                     .attr("cy", point.y)

//                             }
//                         }
//                     };

//                 };

//                 circleTransition()
//             }




//             // let dataSet = {
//             //     source: { x: node.__data__[0].x, y: node.__data__[0].y },
//             //     target: { x: node.__data__[node.__data__.length - 1].x, y: node.__data__[node.__data__.length - 1].y }
//             // }
//         })
//     })
// }




function returnLine(num, idx) {
    let line = [];
    //need to figure out if the lines are being drawn correctly
    //r
    // debugger
    switch (num > 0) {
        case (num <= 90):
            line.push(STARTINGPOINTS[0].east[idx])
            x = STARTINGPOINTS[0].east[idx].x
            y = STARTINGPOINTS[0].east[idx].y
            let endX1 = [x - 400, x + 400]
            let endY1 = [y - 200, y + 400]

            while (endX1[0] < x && y < endY1[1] ) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 30) {
                    line.push({ x: x - 5, y: y + 25 })
                } else if (num < 60) {
                    line.push({ x: x - 10, y: y + 15 })
                } else if (num < 90) {
                    line.push({ x: x - 25, y: y + 5 })
                } else if (num === 90){
                    line.push({ x: x - 10, y: y + 0 })
                }
            }
        break
        case (num <= 180):
            line.push(STARTINGPOINTS[0].south[idx])
            x = STARTINGPOINTS[0].south[idx].x
            y = STARTINGPOINTS[0].south[idx].y
            x = x
            y = y
            let endX2 = [x - 400, x + 400]
            let endY2 = [y - 400, y + 400]

            while (endX2[0] < x && endY2[0] < y) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 130) {
                    line.push({ x: x - 20, y: y - 10 })
                } else if (num < 160) {
                    line.push({ x: x - 10, y: y - 20 })
                } else if (num < 180) {
                    line.push({ x: x - 5, y: y - 20 })
                }else if(num === 180){
                    line.push({x: x + 0, y: y - 20})
                }
            }
        break
        case (num <= 270):

            line.push(STARTINGPOINTS[0].west[idx])
            x = STARTINGPOINTS[0].west[idx].x
            y = STARTINGPOINTS[0].west[idx].y
            x = line[line.length - 1].x
            y = line[line.length - 1].y
            let endX3 = [x - 400, x + 400]
            let endY3 = [y - 400, y + 400]

            while (x < endX3[1] && endY3[0] < y) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 205) {
                    line.push({ x: x + 10, y: y - 30 })
                } else if (num < 240) {
                    line.push({ x: x + 10, y: y - 10 })
                } else if (num < 270) {
                    line.push({ x: x + 20, y: y - 10 })
                } else if (num === 270) {
                    line.push({ x: x + 10, y: y + 0 })
                }
            }
        break
        case (num <= 360):
            line.push(STARTINGPOINTS[0].north[idx])
            x = STARTINGPOINTS[0].north[idx].x
            y = STARTINGPOINTS[0].north[idx].y
            let endX4 = [x - 400, x + 400]
            let endY4 = [y - 400, y + 400]

            while (x < endX4[1] && y < endY4[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 310) {
                    line.push({ x: x + 20, y: y + 10 })
                } else if (num < 330) {
                    line.push({ x: x + 10, y: y + 10 })
                } else if (num < 360) {
                    line.push({ x: x + 5, y: y + 20 })
                } else if(num === 360){
                    line.push({ x: x + 0, y: y + 30 })
                }
            }
        break
        default:
            "Unable to return wind direction"
        break

    }

    return line
}