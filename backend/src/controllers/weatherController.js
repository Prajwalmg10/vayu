const express=require('express')
const router=new express.Router();
const weatherService=require('../services/weatherService');

const fetchWeather= async (req, res) => {
    if(!req.query.location){
        res.status(400).send(new Error("Enter the Location"));
    }
    try {
        weatherService.getWeatherDetails(req.query.location,(error,forecastData)=>{
            if(error){
                res.status(400).send({error});
            }else{
            res.status(200).send({
                foreCast:forecastData.current,
                condition:forecastData.current.condition,
                location:forecastData.location,
                req_loc:req.query.location
            })}
        })
    } catch (e) {
        res.status(400).send(e);
    }
  };

const login=async(req,res)=>{
    res.send("Hello")
}


module.exports={fetchWeather,login};