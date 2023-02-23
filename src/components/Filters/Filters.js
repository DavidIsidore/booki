import {
    faChildReaching,
    faMoneyBill1Wave,
    faHeart,
    faDog,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './filters.scss'

export default function Filters() {
    return (
        <div className="filters">
            <div>
                <h3>Filtres</h3>
                <div>
                    {/*ici lesfiltres*/}
                    <div>
                        <FontAwesomeIcon icon={faMoneyBill1Wave} />
                        <span>Économique</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faChildReaching} />
                        <span>Familial</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Romantique</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faDog} />
                        <span>Animaux autorisés</span>
                    </div>
                </div>
            </div>
            <div className="filters_info">
                <div></div>
                <p>Plus de 500 logements dans cette ville</p>
            </div>
        </div>
    )
}
