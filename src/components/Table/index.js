
import React from 'react'

import TableItem from './Table-item'

import './table.css'

const Table = props => {
    return (
        <table>
            <tbody>
               {
                   !props.materials
                    ? <tr><td>Empty</td></tr>
                    : props.materials.map((material, index) => 
                        <TableItem 
                            key={index}
                            name={material.title}
                            description={material.description}
                        />)
               }
            </tbody>
        </table>
    )
}

export default Table
