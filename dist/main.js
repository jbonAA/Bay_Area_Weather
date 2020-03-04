/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// const CARDINAL = {
//     180: "N",
//     200: "NNE",
//     225: "NE",
//     245: "ENE",
//     270: "E",
//     290: "ESE",
//     315: "SE",
//     340: "SSE",
//     360: "S",
//     25: "SSW",
//     45: "SW",
//     65: "WSW",
//     90:  "W",
//     105: "WNW",
//     125: "NW",
//     145: "NNW",
// }
//due east is 90 degrees due south is 180 due west 270 due north is 360


class WindDirections {
    constructor(place) {
        this.searchPlace = place;

        if(place === "Denver"){

        }else if(place === "Anchorage"){
            this.changeMap('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-149.8894,61.1905,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog')
            this.allStations = [

            ]
        }else if(place === "London"){

        }else if(place === "Tokyo"){
            this.changeMap('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/139.7579,35.6854,10.52/800x800?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog')
            this.allStations = [
                [35.7674, 139.6753],
                [35.7629, 139.8723],
                [35.5991, 139.6801],
                [35.5862, 139.8347]
            ]

        }else{
            this.allStations = [
                [37.875271, -122.597703],
                [37.882356, -122.282195],
                [37.677214, -122.495821],
                [37.7749, -122.4194]
            ]
        }
        //make allStations map bounds
        //grab lnglat from place string
        //this.place = [37, -122]
        //to store search 
        this.place = new Array(1).fill()
        this.latLng = new Array(1).fill(false)

        this.windDir = []
        this.promises = new Array(4).fill()
        this.avg = 0
        this.data = []
        this.forecast = new Array(4).fill()
        this.future1 = {}
        this.future2 = {}

        if(this.searchPlace){
            this.getWeather(this.searchPlace)
        }else{
            this.getWeather()
        }




        this.current = {}

    }

    changeMap(str) {
        let map = document.getElementById("map")
        map.style.backgroundImage = `url(${str})`
        d3.select("svg").remove()
        
    }

    getWeather() {


        this.allStations.forEach(async (el, i) => {
            // console.log(el)
            if(i === 0) {
                let forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${el[0]}&lon=${el[1]}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
                forecast.json().then((res) => {
                    // this.forecast[i] = res
                    // console.log(res)
                    this.future1 = res.list[0]
                    this.future2 = res.list[4]
                    return res
                }).then((res) => {
                    this.data.push(res)
                })
            }
            let currentConditions = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${el[0]}&lon=${el[1]}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
            
            currentConditions.json().then((res) => {
                this.forecast[i] = res
                // this.formatData(res)
                this.windDir.push(res.wind.deg)
                this.avg += res.wind.deg
                this.current = res
                return res
            }).then((res) => {
                if(this.windDir.length === 4){
                    this.findAvg();
                }
            })


        })

            //need to make future objects with this.forecast.forEach and it needs to have keys that correspond with the old AI
            //elevation and period get saved into this.data

                
                //turn response to json

                //look at data.properties from old API
                //add additional info if want
                //

                //


        



        //         .then(res => res.json())
        //         .then(data => {
        //                 that.promises.push({
        //                     data: data.properties
        //             })
        //                 that.data.push({
        //                     elevation: data.properties.elevation,
        //                     period: data.properties.periods[0]
        //                 })
        //         })
        //         .then(() => {
        //             this.promises.forEach((el) => {

        //             let dir = el.data.periods[0].windDirection
        //             this.forecast = el.data.periods[0]
        //             this.future1 = el.data.periods[4]
        //             this.future2 = el.data.periods[8]

        //             this.windDir[this.promises.indexOf(el)] = CARDINAL[`${dir}`]
                    
        //             if (Object.values(this.windDir).length === 4){
        //                 return this.findAvg()
        //             }
        //             //add periods 2-4 for future
        //             // this.formatData(forecast)
        //         })

        //     })
    

    }

    cardinalBounds(x) {
        if (x >= 170 && x <= 190) {
            return "S"
        } else if (x > 190 && x <= 210) {
            return "SSW"
        } else if (x > 210 && x <= 237) {
            return "SW"
        } else if (x > 237 && x <= 258) {
            return "WSW"
        } else if (x > 258 && x <= 280) {
            return "W"
        } else if (x > 280 && x <= 305) {
            return "WNW"
        } else if (x > 305 && x <= 325) {
            return "NW"
        } else if (x > 325 && x <= 345) {
            return "NNW"
        } else if (x > 345 && x <= 360) {
            //same as below for upper north bound north east
            return "N"
        } else if (x >= 0 && x <= 10) {
            return "N"
        } else if (x > 10 && x <= 30) {
            return "NNE"
        } else if (x > 30 && x <= 50) {
            return "NE"
        } else if (x > 50 && x <= 75) {
            return "ENE"
        } else if (x > 75 && x <= 100) {
            return "E"
        } else if (x > 100 && x <= 115) {
            return "ESE"
        } else if (x > 115 && x <= 130) {
            return "SE"
        } else if (x > 130 && x < 170) {
            return "SSE"
        }
    }

    findAvg() {
        // console.log(this.windDir)

        let overall = 0
        Object.values(this.windDir).forEach((el) => {
            overall += el
        })
        this.avg = overall / 4
        

        directions(this.avg, Object.values(wind.windDir))
        
        // console.log(this.forecast)
        // console.log("forecast")
        // console.log(this.future1)
        // console.log("future1")
        // console.log(this.future2)
        // console.log("future2")
        let container = document.querySelector("#info")


        this.formatData(this.forecast[0])

        
        //trying to append an image for each forecast
        //1. check if variables contain weather.main
        //2. if not need to save into variables from res
        //3. because I'm calling formatData with the forecast and futures
        //I'll need to append corresponding picture somewherein that function


        
        let in12hours = document.createElement("h3")
        in12hours.textContent = "12 Hours From Now"
        container.append(in12hours)

        this.formatData(this.future1)

        let in24hours = document.createElement("h3")
        in24hours.textContent = "24 Hours From Now"

        container.append(in24hours)
        this.formatData(this.future2)
    }




    // addSearch() {
    //     let DEN = document.createElement("button")
    //     DEN.textContent = "Denver"
    //     let ALA = document.createElement("button")
    //     ALA.textContent= "Anchorage"
    //     let LON = document.createElement("button")
    //     LON.textContent = "London"
    //     let TOK = document.createElement("button")
    //     TOK.textContent = "Tokyo"
        
    //     let root = document.getElementById("search")
    //     root.append(DEN)
    //     root.append(ALA)
    //     root.append(LON)
    //     root.append(TOK)

    //     let onClik = document.querySelectorAll("button")
    //     console.log(onClik)
    //     console.log(onClik)
    //     onClik.forEach((el) => {
    //         el.addEventListener('click', (event) => this.createNewMap(event))
    //     })
    // }

    createNewMap(e) {
        e.preventDefault();
        console.log(e.currentTarget.textContent)
        console.log(wind)
        wind = new WindDirections(e.currentTarget.textContent)
        // new WindDirections(e.currentTarget.textContent)
    }
    
    formatData(forecast) {
        // debugger
        let dirs = this.cardinalBounds(this.avg)
        // let direct = CARDINAL[`${forecast.wind.deg}`]
        let details = {
            // icon: forecast.icon,
            //grab from front file
            Icon: forecast.weather[0].icon,
            Temperature: ` ${Math.floor(forecast.main.temp)} F`,
            FeelsLike: `${Math.floor(forecast.main.feels_like)} F`,
            WindDirection: "Approx  " + `${dirs} ` + `${forecast.wind.speed} MPH`
        }

        console.log(details)

        appendElements(details)
    }

    
    

}

let wind = new WindDirections()


// console.log(wind)

// console.log(wind.avg)




/***/ })

/******/ });
//# sourceMappingURL=main.js.map