const CARDINAL = {
    "N": 180,
    "NNE": 200,
    "NE": 225,
    "ENE": 245,
    "E": 270,
    "ESE": 290,
    "SE": 315,
    "SSE": 340,
    "S": 360,
    "SSW": 25, 
    "SW": 45,
    "WSW": 65,
    "W": 90,
    "WNW": 105,
    "NW": 125,
    "NNW": 145
}

class WindDirections {
    constructor() {
        this.allStations = [
            [37.875271, -122.597703],
            [37.882356, -122.282195],
            [37.677214, -122.495821],
            [37.7749, -122.4194]
        ]
        //make allStations map bounds
        //grab lnglat from place string
        //this.place = [37, -122]
        this.windDir = {}
        this.promises = []
        this.avg = 0
        this.data = []
        this.forecast = {}
        this.future1 = {}
        this.future2 = {}
        this.getWeather()
    }

    getWeather() {
        this.allStations.forEach(async (el) => {
            let that = this
            const res = await fetch(`https://api.weather.gov/points/${el}/forecast/hourly`)
                .then(res => res.json())

                .then(data => {
                        that.promises.push({
                            data: data.properties
                    })
                        that.data.push({
                            elevation: data.properties.elevation,
                            period: data.properties.periods[0]
                        })
                })
                .then(() => {
                    this.promises.forEach((el) => {

                    let dir = el.data.periods[0].windDirection
                    this.forecast = el.data.periods[0]
                    this.future1 = el.data.periods[4]
                    this.future2 = el.data.periods[8]

                    this.windDir[this.promises.indexOf(el)] = CARDINAL[`${dir}`]
                    
                    if (Object.values(this.windDir).length === 4){
                        return this.findAvg()
                    }
                    //add periods 2-4 for future
                    // this.formatData(forecast)
                })

            })

        })

    }

    findAvg() {
        // console.log(this.forecast)
        Object.values(this.windDir).forEach((el) => {
            this.avg += el
        })
        this.avg = this.avg / 4

        // console.log(this.avg)

        directions(this.avg, Object.values(wind.windDir))
        // console.log(this.windDir)
        this.formatData(this.forecast)

        let in6hours = document.createElement("h3")
        in6hours.textContent = "6 Hours From Now"
        let container = document.querySelector("#info")
        container.append(in6hours)

        this.formatData(this.future1)
        let in12hours = document.createElement("h3")
        in12hours.textContent = "12 Hours From Now"
        container.append(in12hours)
        this.formatData(this.future2)
    }

    formatData(forecast) {
        let details = {
            icon: forecast.icon,
            Forecast: forecast.shortForecast,
            Temperature: ` ${forecast.temperature}` + " " + `${forecast.temperatureUnit}`,
            WindDirection: ` ${forecast.windDirection}` + "  approx  " + `${forecast.windSpeed}`
        }





        appendElements(details)
    }

}

const wind = new WindDirections()
// console.log(wind)

// console.log(wind.avg)


