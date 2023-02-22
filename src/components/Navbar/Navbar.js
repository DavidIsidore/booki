import React from 'react'
import './navbar.scss'
//import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navbar() {
    //const location = useLocation()

    return (
        <nav className="navbar">
            <ul className="navbar_list">
                <li className="navbar_list_item">
                    <Link to="DavidIsidore/booki/hebergements" />
                    Hébergements
                </li>
                <li className="navbar_list_item">
                    <Link to="DavidIsidore/booki/activites" />
                    Activités
                </li>
            </ul>
        </nav>
    )
}
