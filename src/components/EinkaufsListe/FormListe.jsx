import React, {useState} from 'react'

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
                    <input type="text"
                           placeholder="Gib deine sachen ein..."
                           value={text} onChange={(e) => setText(e.target.value)}/>
                    <button type="submit">Hinzufügen</button>
                </div>
            </form>
        </div>
    )
}
