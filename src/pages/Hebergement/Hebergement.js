import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Hebergement() {
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        document.title = 'Hébergement'
    })
    return (
        <div>
            <Header />
            <h1>Hébergements</h1>
            <div>
                <Link to="/DavidIsidore/booki">Retour à la page d'accueil</Link>
            </div>
        </div>
    )
}
