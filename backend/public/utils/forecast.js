const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=bcb83a38a86844959b155526231207&q=${latitude},${longitude}`
    request({ url: url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!res.body) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,res.body)
        }
    })
}

module.exports = forecast