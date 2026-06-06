import { useState } from 'react'
import Header from './component/Header'
import Heading from './component/Heading'
import SearchContainer from './component/SearchContainer'
import WeatherComtainer from './component/WeatherComtainer'


function App() {
  const [weatherData, setWeatherData] = useState('')


  return (
    <>
    <Header />
    <Heading />
    <SearchContainer setWeatherData={setWeatherData} />
    <WeatherComtainer data={weatherData} />
    </>
  )
}

export default App
