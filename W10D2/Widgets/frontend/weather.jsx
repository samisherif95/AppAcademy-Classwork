import React from 'react';

class Weather extends React.Component{
  constructor(){
    
  }

  

  success(pos) {
    var crd = pos.coords;
    console.log(pos);
    console.log(crd);

    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
  
    // http://api.openweathermap.org/data/2.5/weather?lat=37.798961899999995&lon=-122.4012939&appid=9e1f2569419323a59f0db2da42078306
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  some() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }


}

export default Weather;