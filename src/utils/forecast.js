const request = require('request')

const forecast = (lat,long,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=7a0d0c4604d43f8a3430a6da7599e41a&query=" + lat + "," + long
    request({url, json:true}, (error,{body})=>{
        if(error){
          callback("Unable to connect to server",undefined)
        }else if(body.error){
                callback("Unable to find location",undefined)
                } else{
                callback(undefined,body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature +" and it feels like "+ body.current.feelslike + " out there")
                }
    })
    }
    module.exports = forecast