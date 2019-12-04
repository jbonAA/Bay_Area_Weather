function addMoreLines (start) {
    let rest = []
    let above = []
    let below = []

    debugger
    start.forEach((el) => {
        above.push({x: el.x + 30, y: el.y + 30})
        below.push({x: el.x - 30, y: el.y - 30})
    })

    rest.push(above)
    rest.push(below)
    return rest
}