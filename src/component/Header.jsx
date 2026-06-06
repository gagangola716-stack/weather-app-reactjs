import React from 'react'
import logo from '../images/logo.svg'
import units from '../images/icon-units.svg'
import checkMark from '../images/icon-checkmark.svg'
import dropdown from '../images/icon-dropdown.svg'

const Header = () => {
    return (

        <div>
            <div className='container'>
                <nav className="navbar">
                    <div className="container-md">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="dropdown">
                            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="unit-icon me-2 mb-1" src={units} alt="" />
                                Units
                                <img className='dropdownIcon ms-2' src={dropdown} alt="dropdown" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-1">
                                <li><a className="dropdown-item mb-1" href="#">Switch to Imperial</a></li>
                                <li className="dropdown mb-1">Temperature</li>
                                <li className="flex-container"><a className="dropdown-item mb-1" href="#">Celsius (°C) <img
                                    src={checkMark} alt="" /></a></li>
                                <li className="dropdown-2 mb-1">Fahrenheit (°F)</li>
                                <hr className="dropdown-divider" />
                                <li className="dropdown mb-1">Wind Speed</li>
                                <li className="flex-container"><a className="dropdown-item mb-1" href="#">km/h <img
                                    src={checkMark} alt="" /></a></li>
                                <li className="dropdown-2 mb-1">mph</li>
                                <hr className="dropdown-divider" />
                                <li className="dropdown mb-1">Precipitation</li>
                                <li className="flex-container"><a className="dropdown-item mb-1" href="#">Millimeters (mm) <img
                                    src={checkMark} alt="" /></a></li>
                                <li className="dropdown-2 mb-1">Inches (in)</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Header
