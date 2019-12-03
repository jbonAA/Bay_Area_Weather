// function lineAnimate(selection) {
//     debugger
//     selection

//         .attr("y1", function(d) {return d})
//         .attr("y2", function(d) {return d})
//         .style("opacity", 0.5)
//         .transition()
//                 .ease('linear')
//                 .duration(2000)
//             .delay(function(d) {return d*10})
//                 .attr("x2", 500)
//         .transition()
//             .duration(2000)
//             .style("opacity", 0)
//         .each('end', function() {d3.select(this.call(lineAnimate))})
// }

// d3.select('svg')
//     .selectAll('path')
//     .data([0, 5, 10, 15, 20])
//     .enter()
//     .append('path')
//     .call(lineAnimate)
  