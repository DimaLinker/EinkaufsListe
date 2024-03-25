import React from 'react'
import './Liste.scss'
import {RiDeleteBin6Line} from "react-icons/ri";

export const Liste = ({listen, deleteList, toggleList}) => {

    const listItemClasses = `liste ${listen.completed ? 'completedTodo' : ''}`;
    return (
        <div className="liste">
            <div className={listItemClasses}>
                <input type="checkbox" checked={listen.completed} onChange={() => toggleList(listen.id)}/>
                {listen.text}
                <RiDeleteBin6Line className="deleteIcon"
                                  onClick={() => deleteList(listen.id)}/>
            </div>
        </div>
    )
}

