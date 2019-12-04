
function determineDirection(firstPoints, dir){
    debugger
    console.log(firstPoints)
    console.log(dir.y)

    if (dir.x < 0){
        if (dir.y === 0){
            return {x: firstPoints.x -10, y: firstPoints.y}
        }else if(dir.y < 0){
            return {x: firstPoints.x -10, y: firstPoints.y -10}
        }else if(dir.y > 0){
            return {x: firstPoints.x - 10, y: firstPoints.y + 10}
        }
    }else if (dir.x === 0){
        if (dir.y > 0) {
            return {x: firstPoints.x, y: firstPoints.y + 10}
        }else{
            return {x: firstPoints.x, y: firstPoints.y - 10}
        }
    }else{
        if(dir.y < 0){
            return {x: firstPoints.x + 10, y: firstPoints.y - 10}
        }else if(dir.y > 0){
            return {x: firstPoints.x + 10, y: firstPoints.y + 10}
        }else{
            return {x: firstPoints.x + 10, y: firstPoints.y}
        }
    }
    
}

function directionMovement(start, lines, avg) {
    debugger
    let last = start.slice(-1)
    let firstPoints = {x: 0, y: 0}
    let shortest = 800
    let points = {x: 0, y: 0}
    let dir = {x: 0, y: 0}
    console.log(shortest)

    lines._groups[0].forEach((el) => {
        debugger
        let newx = el.__data__[2].x - el.__data__[1].x
        let newy = el.__data__[2].y - el.__data__[1].y
        console.log(newy)
        el.__data__.forEach((point) => {
            let dist = point.x - last[0].x + point.y - last[0].y
            console.log(Math.abs(dist))
            if (Math.abs(dist) < shortest){
                shortest = Math.abs(dist)
                console.log(shortest)
                points.x = point.x
                points.y = point.y
                firstPoints.x = last[0].x
                firstPoints.y = last[0].y
                dir.x = newx
                dir.y = newy
            }
        })
    })
    console.log(shortest)
    console.log(dir)



    start.push(determineDirection(firstPoints, dir))
    let recent = start.slice(-1)
    if(recent[0].x >= 0 && recent[0].y < 800) {
        if(recent[0].x < 800 && recent[0].y >= 0){
            return directionMovement(start, lines, avg)
        }else{
            return start
        }
    }else{
        return start
    }

}

function calculateLoss(lines, num) {

    let start = [];

    switch(num >= 0) {
        case(num <= 90):
            if (num === 0) {
                start.push({x: 0, y: 800})
                start.push({x: 50, y: 750})
            }else if(num <= 45){
                start.push({x: 200, y: 800})
                start.push({ x: 250, y: 750})
            }else if(num <= 90){
                start.push({x: 400, y: 800})
                start.push({ x: 450, y: 750})
            }
        break
        case(num <= 180):
            if(num <= 120){
                start.push({x: 0, y: 0})
                start.push({ x: 50, y: 50 })
            }else if (num <= 160){
                start.push({x: 200, y: 0})
                start.push({ x: 250, y: 50})
            }else if(num <= 180){
                start.push({ x: 400, y: 0})
                start.push({ x: 450, y: 50})
            }
        break
        case(num <= 270):
            if(num <= 210){
                start.push({ x: 800, y: 0})
                start.push({ x: 750, y: 50})
            }else if(num <= 240){
                start.push({ x: 800, y: 200})
                start.push({ x: 750, y: 250})
            }else if(num <= 270){
                start.push({ x:800, y: 410})

            }
        break
        case(num <= 360):
            if(num <= 300){
                start.push({x: 800, y: 800 })
                start.push({ x: 750, y: 750})
            }else if(num <= 330){
                start.push({x: 600, y: 800})
                start.push({ x: 550, y: 750})
            }else if(num <= 360){
                start.push({ x: 400, y: 800 })
                start.push({ x: 400, y: 750})
            }
        break
    }


    
    //start path at point corresponding to average wind direction

    //from that point iterate through the lines to find the closest

    //from there look at the start and end point of that line to 
    //determine the direction that the path needs to follow

    //continuously check to see which is closest


    return start


    //to then append onto the svg

    
}