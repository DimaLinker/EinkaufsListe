import React from 'react'
import './Liste.scss'
import {RiDeleteBin6Line} from "react-icons/ri";

export const Liste = ({listen, deleteList}) => {
    return (
        <div className="liste">
            {listen.text}
            <RiDeleteBin6Line className="deleteIcon"
                               onClick={() => deleteList(listen.id)}/>
        </div>
    )
}
