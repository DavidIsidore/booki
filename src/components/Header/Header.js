import React from 'react'
import logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <div>
            <img src={logo} alt="logo de Booki" />
            <Navbar />
        </div>
    )
}
