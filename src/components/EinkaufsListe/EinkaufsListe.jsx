import React from 'react'
import {Liste} from "./Liste";

export const EinkaufsListe = ({list}) => {
    return (
        <div>
            {list.map((t) => (
                <Liste key={t.id} listen={t}/>
            ))}
        </div>
    )
}
