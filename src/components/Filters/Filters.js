import {
    faChildReaching,
    faMoneyBill1Wave,
    faHeart,
    faDog,
    faCircle,
    faInfo,
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
                    <button className="filters_select_single">
                        <div className="filters_select_single_div">
                            <FontAwesomeIcon
                                icon={faMoneyBill1Wave}
                                className="filters_select_single_div_icon"
                            />
                        </div>
                        <div className="filters_select_single_text">
                            <span>Économique</span>
                        </div>
                    </button>
                    <button className="filters_select_single">
                        <div className="filters_select_single_div">
                            <FontAwesomeIcon
                                icon={faChildReaching}
                                className="filters_select_single_div_icon"
                            />
                        </div>
                        <div className="filters_select_single_text">
                            <span>Familial</span>
                        </div>
                    </button>
                    <button className="filters_select_single">
                        <div className="filters_select_single_div">
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="filters_select_single_div_icon"
                            />
                        </div>
                        <div className="filters_select_single_text">
                            <span>Romantique</span>
                        </div>
                    </button>
                    <button className="filters_select_animaux">
                        <div className="filters_select_animaux_div">
                            <FontAwesomeIcon
                                icon={faDog}
                                className="filters_select_animaux_div_icon"
                            />
                        </div>
                        <div className="filters_select_animaux_text">
                            <span>Animaux autorisés</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="filters_info">
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        className="filters_info_extcircle"
                    />
                    <FontAwesomeIcon
                        icon={faCircle}
                        className="filters_info_intcircle"
                    />
                    <FontAwesomeIcon
                        icon={faInfo}
                        className="filters_info_icon"
                    />
                </div>
                <p className="filters_info_text">
                    Plus de 500 logements dans cette ville
                </p>
            </div>
        </div>
    )
}
