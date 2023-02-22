import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

export default function Activites() {
    useEffect(() => {
        document.title = 'Activités'
    })
    return (
        <div>
            <Header />
            <h1>Activités</h1>
            <div>
                <Link to="/DavidIsidore/booki">Retour à la page d'accueil</Link>
            </div>
        </div>
    )
}
