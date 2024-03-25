import React from 'react'
import {Liste} from "./Liste";
import './EinkaufsListe.scss'

export const EinkaufsListe = ({list, deleteList}) => {
    return (
        <div className="einkaufsListe">
            {list.length === 0 && <p className="text-amber-50 font-black text-3xl">Einkaufsliste ist leer</p>}
            {list.map((t) => (
                <Liste key={t.id} listen={t} deleteList={deleteList}/>
            ))}
        </div>
    )
}
