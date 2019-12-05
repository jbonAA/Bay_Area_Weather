//need to append all info to the #info item

// debugger

function appendElements(windData) {
    // console.log(windData)
    let info = document.querySelector("#info")
    let container = document.createElement("div")
    container.setAttribute("class", "currentWeather")
    // console.log(Object.keys(windData))

    let keys = Object.keys(windData)

    Object.values(windData).forEach((el, idx) => {
        let ele;
        if (idx === 0) {
            ele = document.createElement("img")
            ele.setAttribute("src", el)
        }else{
            ele = document.createElement("p")
            ele.textContent = `${keys[idx]}` + ": " + `${el}`
        }
        container.append(ele)
    })

    info.append(container)

}



