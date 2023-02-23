import React from 'react'
import './filters.scss'

export default function Filters() {
    return (
        <div className="filters">
            <div>
                <h3>Filtres</h3>
                <div>{/*ici lesfiltres*/}</div>
            </div>
            <div className="filters_info">
                <div></div>
                <p>Plus de 500 logements dans cette ville</p>
            </div>
        </div>
    )
}
