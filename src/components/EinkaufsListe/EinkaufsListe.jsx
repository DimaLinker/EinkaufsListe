import React from 'react'
import {Liste} from "./Liste";
import './EinkaufsListe.scss'

export const EinkaufsListe = ({list}) => {
    return (
        <div className="einkaufsListe">
            {list.map((t) => (
                <Liste key={t.id} listen={t}/>
            ))}
        </div>
    )
}
