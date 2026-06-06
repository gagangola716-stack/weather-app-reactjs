import React, { use, useEffect, useState } from 'react'
import WeatherComtainer from './WeatherComtainer'


const SearchContainer = ({ setWeatherData }) => {
    
    const [search, setSearch] = useState('');
    const [showList, setShowList] = useState(false)
    const [debounce, setDebounce] = useState('')
    const [city, setCity] = useState('Delhi')
    const [endPoint, setEndPoint] = useState('')
    

    const statesName = [
        {
            "id": 1,
            "name": "Andhra Pradesh",
            "shortName": "(AP)"
        },
        {
            "id": 2,
            "name": "Arunachal Pradesh",
            "shortName": "(AR)"
        },
        {
            "id": 3,
            "name": "Assam",
            "shortName": "(AS)"
        },
        {
            "id": 4,
            "name": "Bihar",
            "shortName": "(BR)"
        },
        {
            "id": 5,
            "name": "Chhattisgarh",
            "shortName": "(CG)"
        },
        {
            "id": 6,
            "name": "Goa",
            "shortName": "(GA)"
        },
        {
            "id": 7,
            "name": "Gujarat",
            "shortName": "(GJ)"
        },
        {
            "id": 8,
            "name": "Haryana",
            "shortName": "(HR)"
        },
        {
            "id": 9,
            "name": "Himachal Pradesh",
            "shortName": "(HP)"
        },
        {
            "id": 10,
            "name": "Jharkhand",
            "shortName": "(JH)"
        },
        {
            "id": 11,
            "name": "Karnataka",
            "shortName": "(KA)"
        },
        {
            "id": 12,
            "name": "Kerala",
            "shortName": "(KL)"
        },
        {
            "id": 13,
            "name": "Madhya Pradesh",
            "shortName": "(MP)"
        },
        {
            "id": 14,
            "name": "Maharashtra",
            "shortName": "(MH)"
        },
        {
            "id": 15,
            "name": "Manipur",
            "shortName": "(MN)"
        },
        {
            "id": 16,
            "name": "Meghalaya",
            "shortName": "(ML)"
        },
        {
            "id": 17,
            "name": "Mizoram",
            "shortName": "(MZ)"
        },
        {
            "id": 18,
            "name": "Nagaland",
            "shortName": "(NL)"
        },
        {
            "id": 19,
            "name": "Odisha",
            "shortName": "(OD)"
        },
        {
            "id": 20,
            "name": "Punjab",
            "shortName": "(PB)"
        },
        {
            "id": 21,
            "name": "Rajasthan",
            "shortName": "(RJ)"
        },
        {
            "id": 22,
            "name": "Sikkim",
            "shortName": "(SK)"
        },
        {
            "id": 23,
            "name": "Tamil Nadu",
            "shortName": "(TN)"
        },
        {
            "id": 24,
            "name": "Telangana",
            "shortName": "(TS)"
        },
        {
            "id": 25,
            "name": "Tripura",
            "shortName": "(TR)"
        },
        {
            "id": 26,
            "name": "Uttar Pradesh",
            "shortName": "(UP)"
        },
        {
            "id": 27,
            "name": "Uttarakhand",
            "shortName": "(UK)"
        },
        {
            "id": 28,
            "name": "West Bengal",
            "shortName": "(WB)"
        },
        {
            "id": 29,
            "name": "Andaman and Nicobar Islands",
            "shortName": "(AN)"
        },
        {
            "id": 30,
            "name": "Chandigarh",
            "shortName": "(CH)"
        },
        {
            "id": 31,
            "name": "Dadra and Nagar Haveli and Daman and Diu",
            "shortName": "(DN)"
        },
        {
            "id": 32,
            "name": "Delhi",
            "shortName": "(DL)"
        },
        {
            "id": 33,
            "name": "Jammu and Kashmir",
            "shortName": "(JK)"
        },
        {
            "id": 34,
            "name": "Ladakh",
            "shortName": "(LA)"
        },
        {
            "id": 35,
            "name": "Lakshadweep",
            "shortName": "(LD)"
        },
        {
            "id": 36,
            "name": "Puducherry",
            "shortName": "(PY)"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(search)
        }, 500)

        return () => clearTimeout(timer)
    }, [search])

    const filteredStates = statesName.filter((state) =>
        state.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        state.shortName.toLowerCase().includes(search.toLocaleLowerCase())
    )

    
    
    
    const Apikey = 'f01f532213bdd0cbec7c661dbea0f11e'
    const display = async () => {
        try { 
           
            const response = await fetch(`https://pro.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`)
            const data = await response.json()
            // console.log(data)
            setWeatherData(data)    
        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        if (city === '') {
            const defaultCity = 'Delhi'
            setCity(defaultCity)
        }
        display()
        
    }, [])


    const KeyPress = (e) => {
        if (e.key === 'Enter') {
            display()
            setShowList(false)
        }   
    }




    return (
        <div>
            <div className="container">
                <div>
                    <div className="input-group mb-3 mt-5 d-flex justify-content-center gap-3">
                        <div>
                            <input type="text" className="form-control" value={city} onChange={(e) => {
                                setCity(e.target.value)
                                setSearch(e.target.value)
                                setShowList(true)
                            }}  onKeyDown = {KeyPress}
                                placeholder="Search for a place..." id="city-input"
                                autoComplete="off" />
                            <div className="div-container">
                                {showList && debounce && (
                                    <div className="state-container" id="states">
                                        <ul className="state-list">
                                            {filteredStates.length > 0 ? (
                                                filteredStates.map((state) => (
                                                    <li key={state.id} className='state-name' onClick={() => {
                                                        setCity(state.name)
                                                        setShowList(false)
                                                    }}>
                                                        {state.name} {state.shortName}
                                                    </li>
                                                ))
                                            ) : (
                                                <li type="none">No result found</li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* <div className="search-inprogress-container" id="inprogress">
                                <ul className="progress">
                                    <li className="state-name" type="none"><img src="./assets/images/icon-loading.svg" alt="" />
                                        Search in progress
                                    </li>
                                </ul>
                            </div> */}

                        </div>

                        <div>
                            <button className="btn" type="button" id="search-button" onClick={() => {
                                display()
                                setShowList(false)
                                }}>
                                Search
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default SearchContainer
