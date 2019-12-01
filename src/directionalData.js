const STARTINGPOINTS = [
    [{x: 0, y: 0}, { x: 200, y: 0 }, {x: 400, y: 0}, {x: 400, y: 400}, {x: 0, y: 400}],
    [{ x: 400, y: 0}, {x: 600, y: 0}, {x: 800, y: 0}, {x: 800, y: 400}, {x: 400, y: 400}],
    [{ x: 0, y: 400 }, {x: 200, y: 400}, {x: 400, y:400}, {x: 400, y: 800}, {x: 0, y: 800}],
    [{ x: 400, y: 400 }, {x: 600, y: 400}, {x: 800, y: 400}, {x: 800, y: 800}, {x: 500, y: 800} ]
]

function directions(avg, windDir) {

    const bd = d3.select('body')
    var height = bd.style.height
    var width = bd.style.width
    const canv = d3.select("body").append("svg")
        .attr("width", 800)
        .attr("height", 800)

    let data = [

    ]


    //0 should control from 0, 0 to 200, 200
    //1  should contorl from 800, 0 to 600, 200
    //2 should control from 0, 800 to 200, 600
    //3 should control from 600, 600 to 800, 800

    const windVals = windDir
    for(let i = 0; i < windVals.length; i++) {
        data.push(returnLine(windVals[i], i))

        console.log(data)

        



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
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 1)

        

        // animateLines(data)
        data = []
       

    }
}
debugger



function returnLine(num, idx) {
    let line = [];
    
    debugger
    switch (num > 0) {
        case (num <= 90):
            line.push(STARTINGPOINTS[idx][3])
            x = STARTINGPOINTS[idx][3].x
            y = STARTINGPOINTS[idx][3].y
            let endX1 = [x - 200, x + 200]
            let endY1 = [y - 200, y + 200]

            while (x < endX1[1] && y < endY1[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (10 < num < 30) {
                    line.push({ x: x + 10, y: y + 25 })
                } else if (30 < num < 60) {
                    line.push({ x: x + 10, y: y + 10 })
                } else if (60 < num < 90) {
                    line.push({ x: x + 25, y: y + 10 })
                } else {
                    line.push({ x: x + 10, y: y + 0 })
                }
            }
        break
        case (num <= 180):
            line.push(STARTINGPOINTS[idx][1])
            x = STARTINGPOINTS[idx][1].x
            y = STARTINGPOINTS[idx][1].y
            x = x
            y = y
            let endX2 = [x - 200, x + 200]
            let endY2 = [y - 200, y + 400]

            while (x < endX2[1] && y < endY2[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 130) {
                    line.push({ x: x + 20, y: y - 10 })
                } else if (num < 160) {
                    line.push({ x: x + 10, y: y - 20 })
                } else if (num < 180) {
                    line.push({ x: x + 5, y: y + 10 })
                }else if(num === 180){
                    line.push({x: x + 0, y: y + 20})
                }
            }
        break
        case (num <= 270):

            line.push(STARTINGPOINTS[idx][2])
            x = STARTINGPOINTS[idx][2].x
            y = STARTINGPOINTS[idx][2].y
            x = line[line.length - 1].x
            y = line[line.length - 1].y
            let endX3 = [x - 200, x + 200]
            let endY3 = [y - 100, y + 300]

            while (endX3[0] < x && y < endY3[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (180 < num < 205) {
                    line.push({ x: x - 10, y: y + 30 })
                } else if (205 < num < 240) {
                    line.push({ x: x - 10, y: y + 10 })
                } else if (240 < num < 270) {
                    line.push({ x: x - 20, y: y + 10 })
                } else {
                    line.push({ x: x - 10, y: y + 0 })
                }
            }
        break
        case (num <= 360):
            line.push(STARTINGPOINTS[idx][4])
            x = STARTINGPOINTS[idx][4].x
            y = STARTINGPOINTS[idx][4].y
            let endX4 = [x - 200, x + 200]
            let endY4 = [y - 200, y + 200]

            while (endX4[0] < x && endY4[0] < y) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (num < 310) {
                    line.push({ x: x + 20, y: y - 10 })
                } else if (num < 330) {
                    line.push({ x: x + 10, y: y - 10 })
                } else if (num < 360) {
                    line.push({ x: x + 5, y: y - 20 })
                } else {
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