
import React from 'react'
import StarIcon from '@material-ui/icons/Star'

const TableItem = props => {
    return (
        <tr>
            <td>
                <StarIcon id="star-icon" className="" />{props.name} 
            </td>
            <td>
                {props.description}
            </td>
        </tr>
    )
}

export default TableItem

