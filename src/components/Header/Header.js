import React from 'react'
import logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo de Booki" />
            <Navbar />
        </div>
    )
}
