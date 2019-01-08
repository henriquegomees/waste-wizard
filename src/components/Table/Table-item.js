
import React from 'react'
import StarIcon from '@material-ui/icons/Star'

const TableItem = props => {
    return (
        <li className="row">
            <p className="name">
                <StarIcon id="star-icon" className="" />{props.name}
            </p>
            <p>
                {props.description}
            </p>
        </li>
    )
}

export default TableItem

