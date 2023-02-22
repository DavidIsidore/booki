import React from 'react'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        document.title = 'Accueil'
    })
    return <Header />
}
