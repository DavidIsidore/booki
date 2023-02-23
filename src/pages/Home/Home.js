import React from 'react'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Intro from '../../components/Intro/Intro'
import Search from '../../components/Search/Search'
import Filters from '../../components/Filters/Filters'

export default function Home() {
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        document.title = 'Accueil'
    })
    return (
        <main>
            <Header />
            <Intro />
            <Search />
            <Filters />
        </main>
    )
}
