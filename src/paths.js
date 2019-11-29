function paths (avg) {

    console.log(avg)

    const bd = d3.select('body')
    var height = bd.style.height
    var width = bd.style.width
    debugger
    var canvas = d3.select("body").append("svg")
        .attr("width", 800)
        .attr("height", 800)



    var data;
        if(avg < 90){
            data = [
                {x: 0, y: 800},
                {x: 800, y: 800}
            ]
        }else if(avg <= 180){
            data = [
                {x: 400, y: 0},
                {x: 400, y: 800}

            ]

        }else{
            data = [
                {x: 800, y: 800},
                {x: 0, y: 0}
            ]
        }

    var group = canvas.append('g')
        .attr("transform", "translate(0, 0)")
    

    var line = d3.svg.line()
        .x(function(d) {return d.x})
        .y(function(d) {return d.y})

    group.selectAll("path")
        .data([data])
        .enter()
        .append("path")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 1)

}



