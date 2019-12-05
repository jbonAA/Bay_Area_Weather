const STARTINGPOINTS = [{
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


        var line = d3.svg.line()
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
            let windDirection = directionMovement(calculateLoss(paths, avg), paths, avg)
            // console.log(windDirection)

            let length = Math.ceil(windDirection.length / 4)

            
            
            
            let datum = []
            let datum2 = []

            datum1 = windDirection.slice(0, length)
            datum2 = windDirection.slice(length - 1, length * 2)
            datum3 = windDirection.slice(length * 2 - 1, length * 3)
            datum4 = windDirection.slice(length * 3 - 1, length * 4)

            datum.push(datum1)
            datum.push(datum2)
            datum.push(datum3)
            datum.push(datum4)



            // debugger
            let aboveAndBelow = addMoreLines(windDirection)
        // console.log(aboveAndBelow)
        var group = canv.append('g')
            .attr("transform", "translate(0, 0)")

        var line2 = d3.svg.line()
            .x(function (d) { return d.x })
            .y(function (d) { return d.y })
            .interpolate('basis-open')


    
        for (let i = 0; i < datum.length; i++) {
            let lineData = datum[i]
            let idx = i
            let line = canv.append("path")
                .attr("d", line2(lineData))
                .attr("stroke", "white")
                .attr("stroke-width", 2)
                .attr("fill", "none")

            let num = idx
            if (idx === 0){
                num = 2
            }
            repeat(num)

            
            function repeat(num) {
                line
                    .transition()
                    .duration(2000)
                    .attr("opacity", 0)
                    .transition()
                    .duration(1000 * num)
                    .attr("opacity", 1)
                    .on("end", repeat)

            }

            
            
 
        }

        var line2 = d3.svg.line()
            .x(function (d) { return d.x })
            .y(function (d) { return d.y })
            .interpolate('basis-open')

    for (let i = 0; i < datum2.length; i++) {
        let lineData = datum2[i]
        let idx = i
        let line = canv.append("path")
            .attr("d", line2(lineData))
            .attr("stroke", "white")
            .attr("stroke-width", 2)
            .attr("fill", "none")

        let num = idx
        if (idx === 0) {
            num = 2
        }
        repeat(num)


        function repeat(num) {
            line
                .transition()
                .duration(2000)
                .attr("opacity", 0)
                .transition()
                .duration(1000 * num)
                .attr("opacity", 1)
                .on("end", repeat)

        }




    }

        


            
        var above = canv.append("path")
            .attr("d", line2(aboveAndBelow[0]))
            .attr("stroke", "white")
            .attr("stroke-width", 1.5)
            .attr("fill", "none")
        
        var below = canv.append("path")
            .attr("d", line2(aboveAndBelow[1]))
            .attr("stroke", "white")
            .attr("stroke-width", 1.5)
            .attr("fill", "none")
            

            
}




function returnLine(num, idx) {
    let line = [];

    // debugger
    switch (num > 0) {
        case (num <= 90):
            line.push(STARTINGPOINTS[0].south[idx])
            x = STARTINGPOINTS[0].south[idx].x
            y = STARTINGPOINTS[0].south[idx].y
            let endX1 = [x - 400, x + 400]
            let endY1 = [y - 200, y + 400]

            while (x < endX1[1] && y < endY1[0] ) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 30) {
                    line.push({ x: x + 5, y: y - 25 })
                } else if (num < 60) {
                    line.push({ x: x + 10, y: y - 15 })
                } else if (num < 90) {
                    line.push({ x: x + 25, y: y - 5 })
                } else if (num === 90){
                    line.push({ x: x + 10, y: y + 0 })
                }
            }
        break
        case (num <= 180):
            line.push(STARTINGPOINTS[0].north[idx])
            x = STARTINGPOINTS[0].north[idx].x
            y = STARTINGPOINTS[0].north[idx].y
            x = x
            y = y
            let endX2 = [x - 400, x + 400]
            let endY2 = [y - 400, y + 400]

            while (endX2[0] < x && y < endY2[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 130) {
                    line.push({ x: x - 20, y: y - 10 })
                } else if (num < 160) {
                    line.push({ x: x - 10, y: y - 20 })
                } else if (num < 180) {
                    line.push({ x: x - 5, y: y - 20 })
                }else if(num === 180){
                    line.push({x: x + 0, y: y + 20})
                }
            }
        break
        case (num <= 270):

            line.push(STARTINGPOINTS[0].east[idx])
            x = STARTINGPOINTS[0].east[idx].x
            y = STARTINGPOINTS[0].east[idx].y
            x = line[line.length - 1].x
            y = line[line.length - 1].y
            let endX3 = [x - 400, x + 400]
            let endY3 = [y - 400, y + 400]

            while (endX3[0] < x && y < endY3[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 205) {
                    line.push({ x: x - 10, y: y + 30 })
                } else if (num < 240) {
                    line.push({ x: x - 10, y: y + 10 })
                } else if (num < 270) {
                    line.push({ x: x - 20, y: y + 10 })
                } else if (num === 270) {
                    line.push({ x: x - 10, y: y + 0 })
                }
            }
        break
        case (num <= 360):
            line.push(STARTINGPOINTS[0].east[idx])
            x = STARTINGPOINTS[0].east[idx].x
            y = STARTINGPOINTS[0].east[idx].y
            let endX4 = [x - 400, x + 400]
            let endY4 = [y - 400, y + 400]

            while (endX4[0] < x && endY4[0] < y) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 310) {
                    line.push({ x: x - 20, y: y - 10 })
                } else if (num < 330) {
                    line.push({ x: x - 10, y: y - 10 })
                } else if (num < 360) {
                    line.push({ x: x - 5, y: y - 20 })
                } else if(num === 360){
                    line.push({ x: x + 0, y: y - 30 })
                }
            }
        break
        default:
            "Unable to return wind direction"
        break

    }

    return line
}