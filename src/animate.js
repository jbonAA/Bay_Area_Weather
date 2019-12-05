function addMoreLines (start) {
    let rest = []
    let above = []
    let below = []


    debugger
    start.forEach((el) => {
        above.push({x: el.x + 20, y: el.y + 20})
        below.push({x: el.x - 20, y: el.y - 20})


    })

    rest.push(above)
    rest.push(below)

    return rest
}