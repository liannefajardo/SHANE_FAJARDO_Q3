//Fetch weather and time data from weatherstack API    "weatherstack": Unknown word.
document.getElementById('apiForm').addEventListener('submit', async function(e) {
   e.preventDefault();  //Prevent form submission
   const city = document.getElementById('city').value;
   const weatherAPIURL = `http://api.weatherstack.com/current?access_key=b407479e0b82a50c6e75de350f687a9c&query=${encodeURIComponent(city)}`;
   try{
      const weatherResponse = await fetch(weatherAPIURL);    
      const weatherData = await weatherResponse.json();
      console.log(weatherData);//for debugging
      if(weatherData.success === false){
         document.getElementById('weatherResult')
         .textContent = 'Invalid city name. Please try again.'; 
         return;
      }
      //Fetch temperature from weather data
      const currentTemperature = weatherData.current.temperature;
      document.getElementById('weatherResult')
      .textContent = `Current temperature in ${city} is ${currentTemperature}°C`;
      //Fetch local time from weather data
      const currentDatetime = weatherData.location.localtime;  
      const timeZoneId = weatherData.location.timezone_id;
      document.getElementById('timeResult')
      .textContent = `Local time in ${city} (${timeZoneId}) is ${currentDatetime}`;
   }
   catch(error){
      document.getElementById('weatherResult')
      .textContent = 'Error fetching weather/time data';
   }
});
