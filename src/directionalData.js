const STARTINGPOINTS = [
    [{x: 0, y: 0}, { x: 200, y: 0 }, {x: 400, y: 0}, {x: 400, y: 400}, {x: 0, y: 400}],
    [{ x: 400, y: 0}, {x: 600, y: 0}, {x: 800, y: 0}, {x: 800, y: 400}, {x: 400, y: 400}],
    [{ x: 0, y: 400 }, {x: 200, y: 400}, {x: 400, y:400}, {x: 400, y: 800}, {x: 0, y: 800}],
    [{ x: 400, y: 400 }, {x: 600, y: 400}, {x: 800, y: 400}, {x: 800, y: 800}, {x: 400, y: 800} ]
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
        data = data.concat(returnLine(windVals[i], i))

        console.log(data)

        // const lines = canvas.append('g')
        //     .attr("transform", `translate(${line[0].x, line[0].y})`)

        // var paths = d3.svg.line()
        //     .x(function(d) {return d.x})
        //     .y(function(d) {return d.y})

        // d3.selectAll("path")
        //     .data([line])
        //     .enter()
        //     .append("path")
        //     .attr("d", paths)
        //     .attr("fill", "none")
        //     .attr("stroke", "white")
        //     .attr("stroke-width", 1)
        
        // console.log(line)

    }


    

}

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
                    line.push({ x: x + 1, y: y + 2.5 })
                } else if (30 < num < 60) {
                    line.push({ x: x + 1, y: y + 1 })
                } else if (60 < num < 90) {
                    line.push({ x: x + 2.5, y: y + 1 })
                } else {
                    line.push({ x: x + 1, y: y + 0 })
                }
            }
        break
        case (num <= 180):
            line.push(STARTINGPOINTS[idx][0])
            x = STARTINGPOINTS[idx][0].x
            y = STARTINGPOINTS[idx][0].y
            x = x
            y = y
            let endX2 = [x - 200, x + 200]
            let endY2 = [y - 200, y + 200]

            while (x < endX2[1] && y < endY2[1]) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (100 < num < 130) {
                    line.push({ x: x + 2, y: y - 1 })
                } else if (130 < num < 160) {
                    line.push({ x: x + 1, y: y - 2 })
                } else if (160 < num < 180) {
                    line.push({ x: x + 0.5, y: y + 1 })
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
            let endY3 = [y - 100, y + 200]

            while (endX3[0] < x && endY3[0] < y) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (180 < num < 205) {
                    line.push({ x: x - 10, y: y - 30 })
                } else if (205 < num < 240) {
                    line.push({ x: x - 10, y: y - 10 })
                } else if (240 < num < 270) {
                    line.push({ x: x - 20, y: y - 10 })
                } else {
                    line.push({ x: x - 10, y: y + 0 })
                }
            }
        break
        case (num < 360):
            line.push(STARTINGPOINTS[idx][4])
            x = STARTINGPOINTS[idx][4].x
            y = STARTINGPOINTS[idx][4].y
            let endX4 = [x - 200, x + 200]
            let endY4 = [y - 200, y + 200]

            while (endX4[0] < x && endY4[0] < y) {
                x = line[line.length - 1].x
                y = line[line.length - 1].y
                if (270 < num < 310) {
                    line.push({ x: x - 20, y: y + 10 })
                } else if (310 < num < 330) {
                    line.push({ x: x - 10, y: y + 10 })
                } else if (330 < num < 360) {
                    line.push({ x: x - 5, y: y + 20 })
                } else {
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