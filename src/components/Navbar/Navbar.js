import React from 'react'
import './navbar.scss'
//import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navbar() {
    //const location = useLocation()

    return (
        <nav className="navbar">
            <ul className="navbar_list">
                {/*<li className="navbar_list_item">
                    <Link to="/">Accueil</Link>
                </li>*/}
                <li className="navbar_list_item">
                    <Link to="/hebergement">Hébergements</Link>
                </li>
                <li className="navbar_list_item">
                    <Link to="/activites">Activités</Link>
                </li>
            </ul>
        </nav>
    )
}
