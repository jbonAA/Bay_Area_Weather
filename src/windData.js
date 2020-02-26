
function determineDirection(firstPoints, dir){

    
    if (dir.x < 0){
        if (dir.y === 0){
            return {x: firstPoints.x - dir.xInc, y: firstPoints.yInc}
        }else if(dir.y < 0){
            return {x: firstPoints.x + dir.xInc, y: firstPoints.y + dir.yInc}
        }else if(dir.y > 0){
            return {x: firstPoints.x - dir.xInc, y: firstPoints.y + dir.yInc}
        }
    }else if (dir.x === 0){
        if (dir.y > 0) {
            return {x: firstPoints.xInc, y: firstPoints.y - dir.yInc}
        }else{
            return {x: firstPoints.xInc, y: firstPoints.y + dir.yInc}
        }
    }else{
        if(dir.y < 0){
            return {x: firstPoints.x + dir.xInc, y: firstPoints.y - dir.yInc}
        }else if(dir.y > 0){
            return {x: firstPoints.x + dir.xInc, y: firstPoints.y + dir.yInc}
        }else{
            return {x: firstPoints.x + dir.xInc, y: firstPoints.y - dir.yInc}
        }
    }
}

function directionMovement(start, lines, avg) {
    
    start.forEach((vis, i) => {
        let last = vis.slice(-1)
        let firstPoints = { x: 0, y: 0 }
        let shortest = 800
        let points = { x: 0, y: 0 }
        let dir = { x: 0, y: 0, xInc: 0, yInc: 0 }


        lines._groups[0].forEach((el) => {
            el.__data__.forEach((point) => {
                let dist = Math.abs(point.x - last[0].x) + Math.abs(point.y - last[0].y)
                if (Math.abs(dist) < shortest) {

                    let newx = el.__data__[2].x - el.__data__[1].x
                    let newy = el.__data__[2].y - el.__data__[1].y
                    shortest = Math.abs(dist)
                    points.x = point.x
                    points.y = point.y
                    firstPoints.x = last[0].x
                    firstPoints.y = last[0].y
                    dir.xInc = Math.abs(newx)
                    dir.yInc = Math.abs(newy)
                    dir.x = newx
                    dir.y = newy
                }
            })
        })

        vis.push(determineDirection(firstPoints, dir))

        let recent = vis.slice(-1)

        
        if (recent[0].x >= 0 && recent[0].y <= 800) {
            if (recent[0].x <= 800 && recent[0].y >= 0) {
                return directionMovement([vis], lines, avg)
            } else {
                start[i] = vis
            }
        } else {
            start[i] = vis
        }
    })
    
    return start
    
}

// function calculateLoss(lines, num) {
//     // debugger
//     let start = [[],[],[],[],[]];

//     switch(num >= 0) {
//         case(num <= 90):
//             if (num === 0) {
//                 start[0].push({x: 0, y: 200})
//                 start[1].push({x: 0, y: 0})
//                 start[2].push({x: 200, y: 0})
//                 start[3].push({x: 400, y: 0})
//                 start[4].push({x: 600, y: 0})
//             }else if(num <= 45){
//                 start[0].push({x: 200, y: 0})
//                 start[1].push({x: 400, y: 0})
//                 start[2].push({x: 600, y: 0})
//                 start[3].push({x: 800, y: 0})
//                 start[4].push({x: 800, y: 200})
//             }else if(num <= 90){
//                 start[0].push({x: 600, y: 0})
//                 start[1].push({x: 800, y: 0})
//                 start[2].push({x: 800, y: 200})
//                 start[3].push({x: 800, y: 400})
//                 start[4].push({x: 800, y: 600})
//             }
//         break
//         case(num <= 180):
//             if(num <= 120){
//                 start[0].push({x: 800, y: 200})
//                 start[1].push({x: 800, y: 400})
//                 start[2].push({x: 800, y: 600})
//                 start[3].push({x: 800, y: 800})
//                 start[4].push({x: 600, y: 800})
//             }else if (num <= 160){
//                 start[0].push({x: 800, y: 600})
//                 start[1].push({x: 800, y: 800})
//                 start[2].push({x: 600, y: 800})
//                 start[3].push({x: 400, y: 800})
//                 start[4].push({x: 200, y: 800})
//             }else if(num <= 180){
//                 start[0].push({x: 800, y: 800})
//                 start[1].push({x: 600, y: 800})
//                 start[2].push({x: 400, y: 800})
//                 start[3].push({x: 200, y: 800})
//                 start[4].push({x: 0, y: 800})
//             }
//         break
//         case(num <= 270):
//             if(num <= 210){
//                 start[0].push({x: 600, y: 800})
//                 start[1].push({x: 400, y: 800})
//                 start[2].push({x: 200, y: 800})
//                 start[3].push({x: 0, y: 800})
//                 start[4].push({x: 0, y: 600})
//             }else if(num <= 240){
//                 start[0].push({x: 0, y: 0})
//                 start[1].push({ x: 0, y: 200})
//                 start[2].push({ x: 0, y: 400})
//                 start[3].push({x: 0, y: 600})
//                 start[4].push({x: 0, y: 800})
//             }else if(num <= 270){
//                 start[0].push({ x:200, y: 0 })
//                 start[1].push({x: 0, y: 0})
//                 start[2].push({ x:0, y: 200})
//                 start[3].push({x: 0, y: 300})
//                 start[4].push({x: 0, y: 400})
//             }
//         break
//         case(num <= 360):
//             if(num <= 300){
//                 start[0].push({x: 0, y: 400})
//                 start[1].push({x: 0, y: 200})
//                 start[2].push({x: 0, y: 0 })
//                 start[3].push({x: 200, y: 0})
//                 start[4].push({x: 400, y: 0})
//             }else if(num <= 330){
//                 start[0].push({x: 0, y: 400})
//                 start[1].push({x: 0, y: 200})
//                 start[2].push({x: 0, y: 0})
//                 start[3].push({x: 200, y: 0})
//                 start[4].push({x: 400, y: 0})
//             }else if(num <= 360){
//                 start[0].push({x: 0, y: 100})
//                 start[1].push({x: 0, y: 0})
//                 start[2].push({ x: 200, y: 0 })
//                 start[3].push({x: 400, y: 0})
//                 start[4].push({x: 600, y: 0})
//             }
//         break
//     }


    
//     //start path at point corresponding to average wind direction

//     //from that point iterate through the lines to find the closest

//     //from there look at the start and end point of that line to 
//     //determine the direction that the path needs to follow

//     //continuously check to see which is closest


//     return start


//     //to then append onto the svg

    
// }

function calculateLoss(lines, num) {

    let visualize = [];
    let x = 0;
    let y = 0;
    
    variablesX(x)
    variablesY(y)
    
    function variablesX(pos1) {
        let x = pos1
        while (x <= 800) {
            let point = [{ x: x, y: 0 }]
            let corresponding = [{ x: x, y: 800 }]
            x += 50
            visualize.push(point)
            visualize.push(corresponding)
        }
    
    }
    
    function variablesY(pos2) {
        let y = pos2;
        while (y <= 800) {
            let point = [{ x: 0, y: y }]
            let corresponding = [{ x: 800, y: y }]
            y += 50
            visualize.push(point)
            visualize.push(corresponding)
        }
    }
    console.log("visualize")
    console.log(visualize)
    return visualize
}