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
                <div className="filters_select">
                    <h3>Filtres</h3>
                    {/*ici lesfiltres*/}
                    <div className="filters_select_single">
                        <div className="z">
                            <FontAwesomeIcon
                                icon={faMoneyBill1Wave}
                                className="filters_select_single_icon"
                            />
                        </div>
                        <span>Économique</span>
                    </div>
                    <div className="filters_select_single">
                        <div className="z">
                            <FontAwesomeIcon
                                icon={faChildReaching}
                                className="filters_select_single_icon"
                            />
                        </div>
                        <span>Familial</span>
                    </div>
                    <div className="filters_select_single">
                        <div className="z">
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="filters_select_single_icon"
                            />
                        </div>
                        <span>Romantique</span>
                    </div>
                    <div className="filters_select_single">
                        <div className="z">
                            <FontAwesomeIcon
                                icon={faDog}
                                className="filters_select_single_icon"
                            />
                        </div>
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
