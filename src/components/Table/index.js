
import React from 'react'

import TableItem from './Table-item'

import './table.css'

const Table = props => {
    return (
        <ul id="material-list">
            {
                !props.materials
                ? <li>Empty</li>
                : props.materials.map((material, index) => 
                    <TableItem 
                        key={index}
                        name={material.title}
                        description={material.description}
                    />)
            }
        </ul>
    )
}

export default Table
