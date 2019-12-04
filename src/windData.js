
function calculateLoss(lines, averageDir) {

    let start = [];

    switch(averageDir >= 0) {
        case(num <= 90):
            if (num === 0) {
                start.push({x: 600, y: 800})
            }else if(num <= 45){
                start.push({x: 0, y: 800})
            }else if(num <= 90){
                start.push({x: 0, y: 400})
            }
        break
        case(num <= 180):
            if(num <= 120){
                start.push({x: 800, y: 600})
            }else if (num <= 160){
                start.push({x: 800, y: 800})
            }else if(num <= 180){
                start.push({ x: 600, y: 800})
            }
        break
        case(num <= 270):
            if(num <= 210){
                start.push({ x: 0, y: 600})
            }else if(num <= 240){
                start.push({ x: 0, y: 800})
            }else if(num <= 270){
                start.push({ x:200, y: 800})
            }
        break
        case(num <= 360):
            if(num <= 300){
                start.push({x: 0, y: 200 })
            }else if(num <= 330){
                start.push({x: 0, y: 0})
            }else if(num <= 360){
                start.push({ x:200 y: 0 })
            }
        break
    }


    
    //start path at point corresponding to average wind direction

    //from that point iterate through the lines to find the closest

    //from there look at the start and end point of that line to 
    //determine the direction that the path needs to follow

    //continuously check to see which is closest

    lines.forEach((el) => {
        debugger
    })
    






    //to then append onto the svg

    return path
}