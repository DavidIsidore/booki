import React from 'react'
import locate from '../../assets/icons/location-dot-solid.svg'
import loupe from '../../assets/icons/loupe.svg'
import './search.scss'
import { useState, useEffect } from 'react'

export default function Search() {
    function useWindowSize() {
        const isClient = typeof window === 'object'

        function getSize() {
            return {
                width: isClient ? window.innerWidth : undefined,
                height: isClient ? window.innerHeight : undefined,
            }
        }

        const [windowSize, setWindowSize] = useState(getSize)

        useEffect(() => {
            if (!isClient) {
                return false
            }

            function handleResize() {
                setWindowSize(getSize())
            }

            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }, []) // Empty array ensures that effect is only run on mount and unmount

        return windowSize
    }

    const screenWidth = useWindowSize().width
    console.log(screenWidth)
    return (
        <form className="search">
            <div>
                <img
                    className="search_locate"
                    src={locate}
                    alt="location icon"
                />
            </div>
            <input className="search_input" type="text" name="search"></input>
            <div>
                <button
                    className={
                        screenWidth <= 992
                            ? 'search_loupe'
                            : 'search_loupe_display'
                    }
                >
                    <img alt="loupe" src={loupe} />
                </button>
                <button
                    className={
                        screenWidth > 992
                            ? 'search_look'
                            : 'search_loupe_display'
                    }
                >
                    <p className="search_look_text">Rechercher</p>
                </button>
            </div>
        </form>
    )
}
