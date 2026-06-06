import React from 'react'
import bg from '../images/bg-today-large.svg'
import drizzle from '../images/icon-drizzle.webp'
import fog from '../images/icon-fog.webp'
import overcast from '../images/icon-overcast.webp'
import partlyCloudy from '../images/icon-partly-cloudy.webp'
import rain from '../images/icon-rain.webp'
import snow from '../images/icon-snow.webp'
import storm from '../images/icon-storm.webp'
import sunny from '../images/icon-sunny.webp'
import dropdown from '../images/icon-dropdown.svg'


const WeatherComtainer = ({ data }) => {



    // console.log(data)

    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { weekday: 'long', month: 'short', day: '2-digit', year: 'numeric' };
        return currentDate.toLocaleDateString('en-GB', options)
    }




    return (
        <div>
            <div className="container">
                <div className="weather-container">
                    <div className="parent p-2 w-100">
                        <div className="container text-center">
                            <div className="row">

                                <div className="col-md-12 main-img-container">
                                    <div className="content-bg">
                                        <div className="display">
                                            <div className="display-content">
                                                <div className="display-city">
                                                    <span className="state-txt">
                                                        {data?.name}
                                                    </span>, India
                                                </div>
                                                <div className="display-date">
                                                    {getCurrentDate()}
                                                </div>
                                            </div>
                                            <div className="weather-persent">

                                                <img src={sunny} alt="weather" className="display-img" />

                                                <div id="temperature">

                                                    {data?.main?.temp}°
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="show-data row row-cols-1 row-cols-sm-2 row-cols-md-4">
                                <div className="col">
                                    <div className="data-name">Temperature</div>
                                    <div className="number-data" id="temperature-value-txt">{data?.main?.temp}°</div>
                                </div>
                                <div className="col">
                                    <div className="data-name">Humidity</div>
                                    <div className="number-data" id="humidity-value-txt">{data?.main?.humidity}%</div>
                                </div>
                                <div className="col">
                                    <div className="data-name">Wind </div>
                                    <div className="number-data" id="wind-value-txt">{data?.wind?.speed} km/h</div>
                                </div>
                                <div className="col">
                                    <div className="data-name">Precipitation</div>
                                    <div className="number-data" id="precipitation-value-txt">{data?.rain?.["1h"] || 0} mm</div>
                                </div>
                            </div>

                        </div>

                        <h5 className='dailyForecast'>Daily Forecast</h5>
                        <div className="days-forecast row row-cols-1 row-cols-sm-2 row-cols-lg-7">
                            <div className="day-forecast">
                                Tue
                                <div><img className="forecast-img" src={fog} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                            <div className="day-forecast">
                                Wed
                                <div><img className="forecast-img" src={overcast} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                            <div className="day-forecast">
                                Thu
                                <div><img className="forecast-img" src={rain} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                            <div className="day-forecast">
                                Fri
                                <div><img className="forecast-img" src={snow} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                            <div className="day-forecast">
                                Sat
                                <div><img className="forecast-img" src={storm} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                            <div className="day-forecast">
                                Sun
                                <div><img className="forecast-img" src={sunny} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                            <div className="day-forecast">
                                Mon
                                <div><img className="forecast-img" src={partlyCloudy} alt="" /></div>
                                <div className="percent">
                                    <div className="persent-number">20°</div>
                                    <div className="persent-number">14°</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="data p-2 flex-shrink-1">
                        <div className="weaks-head">
                            <div>
                                <h5>Hourly forecast</h5>
                            </div>
                            <div className="weak-days" id="daysDropdown">
                                <div className="dropdown">

                                    <div className="all-dropdown">

                                        <select className="daySelection p-2">
                                            <option className="dropdown-item" value="Sun">Sunday</option>
                                            <option className="dropdown-item" value="Mon">Monday</option>
                                            <option className="dropdown-item" value="Tue">Tuesday</option>
                                            <option className="dropdown-item" value="Wed">Wednesday</option>
                                            <option className="dropdown-item" value="Thu">Thursday</option>
                                            <option className="dropdown-item" value="Fri">Friday</option>
                                            <option className="dropdown-item" value="Sat">Saturday</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="forecast-container" id="hourlyForecast">
                            <ul className="forecast-list">
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={overcast} alt="" />3 PM
                                        </li>
                                    </div>
                                    <div>
                                        20°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={partlyCloudy} alt="" />4
                                            PM</li>
                                    </div>
                                    <div>
                                        20°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={sunny} alt="" />5 PM</li>
                                    </div>
                                    <div>
                                        20°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={overcast} alt="" />6 PM
                                        </li>
                                    </div>
                                    <div>
                                        19°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={rain} alt="" />7 PM</li>
                                    </div>
                                    <div>
                                        18°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={fog} alt="" />8 PM</li>
                                    </div>
                                    <div>
                                        18°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={rain} alt="" />9 PM</li>
                                    </div>
                                    <div>
                                        17°
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <li className="time" type="none"><img src={overcast} alt="" />10 PM
                                        </li>
                                    </div>
                                    <div>
                                        17°
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherComtainer
