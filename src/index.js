import _ from 'lodash';
import axios from 'axios'
import {svgs} from './svg'


let promises = []


const allStations = [
    [37.875271, -122.597703],
    [37.882356, -122.282195],
    [37.677214, -122.495821],
    [37.705890, -122.157217]
]


allStations.forEach( async (el) => {

    const res = await axios.get(`http://api.weather.gov/points/${el}/forecast/hourly`)
    console.log(res)
    promises.push({
        data: res.data.properties
    })


    console.log(promises)
    
})






function component(promises) {
    debugger
    const element = document.createElement('img');
    
    // let lines = svgs(promises)
    // lines.forEach((el) => {
    //     document.getElementById("map").append(el)
    // })

    // element.src = 'https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.437951,37.759917,10.52/900x900?access_token=pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog'

    return element;
}

document.getElementById("map").appendChild(component());