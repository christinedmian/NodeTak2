

const request = require('request')


const forecast = require("./data1/forecast")

const geocode = require("./data1/geocode")


const country =process.argv[2]
geocode(country, (error, data) => {
    console.log("error", error)
    console.log("data", data)
    forecast(data.latitude, data.longtitude, (error, data) => {
        console.log("Error : " + error)
        console.log("Data : " + data)

    })
})






