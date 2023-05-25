// bruke fetch API i en funksjon

/*async function sendRequestOslo() {

  let response= await fetch ('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.911491&lon=10.757933')
  let data= await response.json()

  // tempetaur nå i oslo
  console.log(data.properties.timeseries[0].data.instant.details.air_temperature);
  showOslo(data);
  console.log(data);
  document.getElementById("outputTemp").innerHTML= "Temperaturen er "+ data.properties.timeseries[0].data.instant.details.air_temperature + " grader celcius";
  
  // hvor mye det blåser nå i oslo
  console.log(data.properties.timeseries[0].data.instant.details.wind_speed);
  showOslo(data);
  console.log(data);
  document.getElementById("outputWind").innerHTML= "Det blåser "+ data.properties.timeseries[0].data.instant.details.wind_speed + " meter i sekundet";

}
function showOslo(data){
    console.log("outputTemp", "outputWind");
}
*/



//annen løsning

//oslo
let oslo_loc = "oslo";
let oslo_lat = "59.9114";
let oslo_lon = "10.7579";

let YrRequestOslo = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+oslo_lat+'&lon='+oslo_lon;

//ski
let ski_loc = "ski";
let ski_lat = "59.7196";
let ski_lon = "10.8358";

let YrRequestSki= 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+ski_lat+'&lon='+ski_lon;

//sandvika
let sandvika_loc = "sandvika";
let sandvika_lat = "59.8907";
let sandvika_lon = "10.5277";

let YrRequestSandvika = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+sandvika_lat+'&lon='+sandvika_lon;


function sendRequest(loc, lat, lon){
  
  fetch ('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+lat+'&lon='+lon)
      .then((response) => response.json())
      .then((data) => showWeather(data));
      document.getElementById("by").innerHTML = loc;
}

function showWeather(data){

  console.log(data);

//temp
  //console.log(data.properties.timeseries[0].data.instant.details.air_temperature);
    let temp_now = data.properties.timeseries[0].data.instant.details.air_temperature;
      document.getElementById("outputTemp").innerHTML = "Temperaturen er "+ temp_now+ " grader";

//vind
    let wind_now = data.properties.timeseries[0].data.instant.details.wind_speed;
      document.getElementById("outputWind").innerHTML = "Det blåser "+ wind_now+ " meter i sekundet";

//nedbør
    let humidity_now = data.properties.timeseries[0].data.instant.details.relative_humidity;
    document.getElementById("outputHumidity").innerHTML = "Det er "+ humidity_now+ "% luftfuktighet";
}

