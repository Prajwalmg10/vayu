const geocode = require('../../public/utils/geocode')
const forecast = require('../../public/utils/forecast')

 const getWeatherDetails =async(location,callback)=>{
         if(!location){            
            console.log('Please provide an location')
        } else {
             geocode(location,(error, data) => {
                if (error) {
                   return callback(error, undefined);
                }
                forecast(data.latitude, data.longitude,(error, forecastData) => {
                    if (error) {
                        return  callback(error,undefined)
                    }
                    console.log(forecastData);
                    return callback(undefined,forecastData)
                })
            })
          
        }
    }   

module.exports={getWeatherDetails}

