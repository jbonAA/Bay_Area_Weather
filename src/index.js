const CARDINAL = {
    "N": 360,
    "NNE": 20,
    "NE": 45,
    "ENE": 70,
    "E": 90,
    "ESE": 110,
    "SE": 135,
    "SSE": 160,
    "S": 180,
    "SSW": 205,
    "SW": 225,
    "WSW": 245,
    "W": 270,
    "WNW": 295,
    "NW": 315,
    "NNW": 335
}

class WindDirections {
    constructor() {
        this.allStations = [
            [37.875271, -122.597703],
            [37.882356, -122.282195],
            [37.677214, -122.495821],
            [37.705890, -122.157217]
        ]
        //make allStations map bounds
        //grab lnglat from place string
        //this.place = [37, -122]
        this.windDir = {}
        this.promises = []
        this.avg = 0
        this.data = []
        this.forecast = {}
        this.getWeather()
    }

    getWeather() {
        this.allStations.forEach(async (el) => {
            let that = this
            const res = await fetch(`http://api.weather.gov/points/${el}/forecast/hourly`)
                .then(res => res.json())

                .then(data => {
                        that.promises.push({
                            data: data.properties
                    })
                        that.data.push({
                            elevation: data.properties.elevation,
                            period: data.properties.periods.slice(-1)
                        })
                })
                .then(() => {
                    this.promises.forEach((el) => {

                    let dir = el.data.periods[0].windDirection
                    this.forecast = el.data.periods[0]
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
        console.log(this.forecast)
        Object.values(this.windDir).forEach((el) => {
            this.avg += el
        })
        this.avg = this.avg / 4

        console.log(this.avg)
        // paths(wind.avg)
        directions(this.avg, Object.values(wind.windDir))
        console.log(this.windDir)
        this.formatData(this.forecast)
    }

    formatData(forecast) {
        let details = {
            windSpeed: forecast.windSpeed,
            windDirection: forecast.windDirection,
            temperature: forecast.temperature,
            temperatureUnit: forecast.temperatureUnit,
            shortForecast: forecast.shortForecast,
            icon: forecast.icon,
        }





        appendElements(details)
    }

}

const wind = new WindDirections()
console.log(wind)

console.log(wind.avg)


