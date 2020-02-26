function addMoreLines (start) {
    let rest = []
    let above = []
    let below = []


    // debugger
    start.forEach((el) => {
        if(start[0].x > 700 && start[0].y > 700){
            above.push({x: el.x + 20, y: el.y + 20})
            below.push({x: el.x - 20, y: el.y - 20}) 
        }else if(start[0].x > 700 && start[0].y < 400){
            above.push({x: el.x - 20, y: el.y - 20})
            below.push({x: el.x - 20, y: el.y + 20})
        }else if(start[0].x > 200 && start[0].y > 750){
            above.push({x: el.x + 20, y: el.y - 20})
            below.push({x: el.x + 20, y: el.y + 20})
        }else{ 
            above.push({x: el.x + 20, y: el.y - 20})
            below.push({x: el.x - 20, y: el.y + 20})
        }


    })
    

    rest.push(above)
    rest.push(below)

    return rest
}