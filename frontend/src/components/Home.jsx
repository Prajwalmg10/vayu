import {useEffect, useRef, useState } from "react";
import '../css/home.css';
import Map from "./map";

const Home=()=>{
    const [weather,setweather]=useState({})
    const [location,setLocation]=useState({})
    let address=useRef()
    const [condition,setCondition]=useState({})
useEffect(()=>{
  if(!address.current.value){
    address.current.value="hassan"
  }
  const apiUrl= `http://localhost:3001/weather?location=${address.current.value}`
  fetch(apiUrl).then(response=>{
    if(response.status===400){
      alert("Please provide a location")
    }else{
    response.json().then(data=>{
      console.log(data);
        if(data.error){
            alert(data.error)
        }else{
            setweather(data.foreCast)
            setLocation(data.location)
            setCondition(data.condition);
        }
    }
)
  }
})   
address.current.value="";
},[address])
const search=(e)=>{
  e.preventDefault();
        const apiUrl= `http://localhost:3001/weather?location=${address.current.value}`
        fetch(apiUrl).then(response=>{
          if(response.status===400){
            alert("Please provide a location")
          }else{
          response.json().then(data=>{
            console.log(data);
              if(data.error){
                  alert(data.error)
              }else{
                  setweather(data.foreCast)
                  setLocation(data.location)
                  setCondition(data.condition);
              }
          }
      )
        }
      })       
}

    return(<div class="dash">
   
      <div className="p-lg-5 d-flex justify-content-around">
      <div className="">
        <h2 className="">{location.name}, {location.region}, {location.country}</h2>
        <p className="">Current temperature: {weather.temp_c}°C ({weather.temp_f}°F)</p>
        <p className="">Condition: {condition.text}</p>
        <img src={condition.icon} alt={condition.text} className="" />
      </div>
      <div className="">
          <p className="">Wind: {weather.wind_kph} kph, {weather.wind_dir}</p>
          <p className="">Pressure: {weather.pressure_mb} mb</p>
          <p className="">Humidity: {weather.humidity}%</p>
          <p className="">Visibility: {weather.vis_km} km</p>
        </div>
    </div>
    <div className="d-flex justify-content-center">
          <form className="d-flex" onSubmit={search} >
                
                <div class="col-10">
                <input type="text" 
                  ref={address}
                  placeholder="Search location"
                  className="form-control"  aria-label="Location"/>
                </div>
                <div>
                <button className="ms-0 btn btn-primary" type="submit">Search</button>  
                </div>  
          </form>

        </div>
        <div>

        {/* <Map/> */}
      
        </div>
    </div>)
}

export default Home;