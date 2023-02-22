import React from 'react'
import { useEffect } from 'react'

export default function Activites() {
    useEffect(() => {
        document.title = 'Activités'
    })
    return (
        <div>
            <h1>Activités</h1>
        </div>
    )
}
