//need to append all info to the #info item

// debugger

function appendElements(windData) {
    // console.log(windData)
    let info = document.querySelector("#info")
    let container = document.createElement("div")
    container.setAttribute("class", "currentWeather")
    // console.log(Object.keys(windData))

    let keys = Object.keys(windData)
    infodiv = document.createElement("div")

    Object.values(windData).forEach((el, idx) => {
        let ele;
        if (idx === 0) {
            ele = document.createElement("img")
            ele.setAttribute("src", el)
            ele.setAttribute("width", 118)
            container.append(ele)
        }else{
            ele = document.createElement("p")
            ele.textContent = `${keys[idx]}` + ": " + `${el}`
            ele.setAttribute("color", "white")
            infodiv.append(ele)
        }
    })

    info.append(container)
    container.append(infodiv)

    
}

