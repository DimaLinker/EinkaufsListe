import React from 'react'
import './Liste.scss'

export const Liste = ({listen}) => {
    return (
        <div className="liste">
            {listen.text}
        </div>
    )
}
