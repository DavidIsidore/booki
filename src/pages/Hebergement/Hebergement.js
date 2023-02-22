import React from 'react'
import { useEffect } from 'react'

export default function Hebergement() {
    useEffect(() => {
        document.title = 'Hébergements'
    })
    return (
        <div>
            <h1>Hébergements</h1>
        </div>
    )
}
