const request = require('request')

const geocode = (address, callback)=> {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYWhtZWRhc2hyYWZtIiwiYSI6ImNrczdpd3kyaDFkZWgydnBoZmd6ZmE0c2MifQ._v3yS2zw0dqv402-bcox8g"
    request({url, json:true }, (error,{body})=>{
        if(error){
            callback("Unable to connect to location services!",undefined)
        }else if(body.features.length < 1){
            callback("Unable to find the location",undefined)}
            else{
                 callback(undefined,{
                    lat: body.features[0].center[1],
                    long: body.features[0].center[0],
                    location: body.features[0].place_name
                 })
                    }
    })
}
module.exports = geocode