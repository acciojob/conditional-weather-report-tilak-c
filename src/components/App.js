import WeatherDisplay from './WeatherDisplay'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [weather,setWeather]=useState({temperature:25,conditions:"Sunny"})
  return (
    <div>
        {/* Do not remove the main div */}
      <WeatherDisplay data={weather}/>
    </div>
  )
}

export default App
