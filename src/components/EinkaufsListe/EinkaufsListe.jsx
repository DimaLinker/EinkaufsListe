import React from 'react'
import {Liste} from "./Liste";
import './EinkaufsListe.scss'

export const EinkaufsListe = ({list, deleteList, toggleList}) => {
    return (
        <div className="einkaufsListe">
            {list.length === 0 && <p className="text-amber-50 font-black text-3xl">Einkaufsliste ist leer</p>}
            {list.map((t) => (
                <Liste key={t.id} listen={t} deleteList={deleteList} toggleList={toggleList}/>
            ))}
        </div>
    )
}
