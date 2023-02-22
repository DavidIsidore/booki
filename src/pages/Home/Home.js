import React from 'react'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        document.title = 'Accueil'
    })
    return <Header />
}
