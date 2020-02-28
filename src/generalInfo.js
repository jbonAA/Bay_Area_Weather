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

    
    




    // console.log(windData)
    let info = document.querySelector("#info")
    let container = document.createElement("div")
    container.setAttribute("class", "currentWeather")
    // console.log(Object.keys(windData))
    let picture = document.createElement("div")
    let icon = await fetch(`http://openweathermap.org/img/wn/${windData.Icon}@2x.png}`)
        icon.json().then((res) => {
            let img = document.createElement("img")
            img.setAttribute("src", `${res}`)
            console.log(img)
            picture.append(img)
        })
    
   
    // picture.setAttribute("id", "image")
    // picture.setAttribute("background-image", url(`http://openweathermap.org/img/wn/${icon}@2x.png`))
    // container.append(picture)

    // let ele = document.createElement("img")
    // ele.setAttribute("src", url(icon))
    // let pic = document.getElementById("image")
    // pic.append(ele)

    let keys = Object.keys(windData)
    infodiv = document.createElement("div")

    Object.values(windData).forEach(async (el, idx) => {
        let ele;
        if (idx === 0) {
            //condition if sunrise <= dt <= sunset
            //then pull from day folder

            //else pull image from night folder
            //find the variation in return from API
            //get pictures for the scenarios in day/night and src url as object
            //ex 
            //dark: {"clear": "url",
            //     "partly": "url",
            //     "cloudy": "url",
            //     "rainy": "url",
            //     "snowy": "url" 
            // }
            
            

            // ele = document.createElement("img")
            // ele.setAttribute("src", el)
            // ele.setAttribute("width", 118)
            // container.append(ele)
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





//info for changing the background image on the map depending on the location
// Default:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.437951,37.759917,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');

// anchorage:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-149.8894,61.1905,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');

// denver:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-104.9995,39.6831,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');

// tokyo:
// background - image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/139.7579,35.6854,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog');
