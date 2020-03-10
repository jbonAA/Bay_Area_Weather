//need to append all info to the #info item

// debugger




async function appendElements(windData) {

    //pull elements from windData below
    //switch case for choosing the image
    //basic logic for checking if day/night
    // const weatherImages = {
    //     "clear":
    //     "cloudy":
    //     "rain":
    //         //if current dt-datetime is in between sys sunrise and sunset and less than 6 in the morning

    //     "time": datatime
    //     "sunrise":
    //     "sunset":
    // }

    // debugger

    


// executed applied enabled employed

    // console.log(windData)
    let info = document.querySelector("#info")
    let container1 = document.createElement("div")
    container1.setAttribute("class", "currentWeather")

    // let picture = document.createElement("div")
    // picture.setAttribute("class", "img")
    // container1.append(picture)


    // let icon = await fetch(`https://openweathermap.org/img/wn/${windData.Icon}@2x.png`)

    // console.log(Object.keys(windData))
    // let picture = document.createElement("div")
    //     icon.json().then((res) => {
    //         let img = document.createElement("img")
    //         img.setAttribute("src", `${res}`)
    //         console.log(img)
    //         picture.append(img)
    //     })
    
   
    // picture.setAttribute("id", "image")
    // picture.setAttribute("background-image", url(`http://openweathermap.org/img/wn/${icon}@2x.png`))
    // container.append(picture)

    // let ele = document.createElement("img")
    // ele.setAttribute("src", url(icon))
    // let pic = document.getElementById("image")
    // pic.append(ele)

    let keys = Object.keys(windData)
    infodiv = document.createElement("div")
    infodiv.setAttribute("id", "separate")
    let addInfo = document.createElement("div")

    Object.values(windData).forEach(async (el, idx) => {

        let ele;
        if (idx === 0) {
            //condition if sunrise <= dt <= sunset
            //then pull from day folder

            let iconPics = {
                "01d": "./photos/light/Clear.png",
                "02d": "./photos/light/Partly.png",
                "03d": "./photos/light/Cloudy.png",
                "04d": "./photos/light/Cloudy.png",
                "09d": "./photos/light/Rain.png",
                "10d": "./photos/light/Rain.png",
                "11d": "./photos/dark/Stormy.png",
                "50d": "./photos/light/Cloudy.png",
                "01n": "./photos/dark/Clear.png",
                "02n": "./photos/dark/Partly.png",
                "03n": "./photos/dark/Cloudy.png",
                "04n": "./photos/dark/Cloudy.png",
                "09n": "./photos/dark/SlightRain.png",
                "10n": "./photos/dark/Stormy.png",
                "11n": "./photos/dark/Stormy.png",
                "50n": "./photos/light/Cloudy.png"
            }

            debugger
            let srcString = iconPics[el]

            
            let img = document.createElement("img")
            let d = document.createElement("div")
            d.setAttribute("id", "decrease")
            img.setAttribute("src", srcString)
            img.setAttribute("id", "photoIcon")
            d.append(img)
            infodiv.append(d)

            

            // ele = document.createElement("img")
            // ele.setAttribute("src", el)
            // ele.setAttribute("width", 118)
            // container.append(ele)
        }else{
            ele = document.createElement("p")
            ele.textContent = `${keys[idx]}` + ": " + `${el}`
            ele.setAttribute("color", "white")
            debugger
            addInfo.append(ele)
        }
    })

    infodiv.append(addInfo)
    info.append(container1)
    container1.append(infodiv)

    
}





//info for changing the background image on the map depending on the location
// Default:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.437951,37.759917,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');

// anchorage:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-149.8894,61.1905,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');

// denver:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-104.9995,39.6831,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');

// tokyo:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/139.7579,35.6854,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');
