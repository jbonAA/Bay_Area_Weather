
//  console.log(paths)

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
        this.windDir = {}
        this.promises = []
        this.avg = 0
        this.data = []
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
                    let length = el.data.periods.length
                    let dir = el.data.periods[length - 1].windDirection
                    this.windDir[this.promises.indexOf(el)] = CARDINAL[`${dir}`]

                    if (Object.values(this.windDir).length === 4){
                        this.formatData()
                        return this.findAvg()
                    }
                })

            })

        })
        

    }

    findAvg() {
        Object.values(this.windDir).forEach((el) => {
            this.avg += el
        })
        this.avg = this.avg / 4

        console.log(this.avg)
        // paths(wind.avg)
        directions(this.avg, Object.values(wind.windDir))
        console.log(this.windDir)
    }

    formatData() {

        
        console.log(this.data)


    }

}

const wind = new WindDirections()
console.log(wind)

console.log(wind.avg)


