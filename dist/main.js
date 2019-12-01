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




/***/ })

/******/ });
//# sourceMappingURL=main.js.map