const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
 //const url = https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${Api_key};

function getWeather(){
    const city=document.getElementById('cityInput').value;
    const weatherDetails=document.getElementById('weatherDetails');
    if(city===''){
        weatherDetails.innerHTML='<p>Please Enter a City Name</p>'
        return;
    }
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
     fetch(url)
    .then(response=>response.json())
    .then(data=>{
        if(data.cod==='404'){
            weatherDetails.innerHTML='<p>City not found please try again</p>';
        }
        else{
            weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2> <p>Temprature:${data.main.temp}</p> <p>Temprature:${data.main.temp_max}</p>`;
            
        }
    })
    .catch(error=>{
        weatherDetails.innerHTML='<p> error fetching data</p>';
    });
}
 