import React from 'react'

export const Comment = ({commentData}) => {
    return (
        <li className="list-group-item">{commentData.text}</li>
    )
}
