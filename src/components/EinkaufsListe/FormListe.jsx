import React, {useState} from 'react'
import './FormListe.scss'

export const FormListe = ({addList}) => {


    const [text, setText] = useState('')

    const addSubmitHandlerList = (e) => {
        e.preventDefault()
        addList(text)
        setText('')

    }
    return (
        <div>
            <form onSubmit={addSubmitHandlerList}>
                <div>
                    <input className="inputForm" type="text"
                           placeholder="Gib deine sachen ein..."
                           value={text} onChange={(e) => setText(e.target.value)}/>
                    <button type="submit" className="buttonForm">Hinzufügen</button>
                </div>
            </form>
        </div>
    )
}
