
import React from 'react'
import StarIcon from '@material-ui/icons/Star'

const parseStrToHTML = (str) => {
    var parser = new DOMParser()
    var doc    = parser.parseFromString(str, "text/html")

    return doc.childNodes[0].innerText
}

const TableItem = props => {
    return (
        <li className="row">
            <p className="name">
                <button className="star-btn">
                    <StarIcon id="star-icon" className="" />
                </button>
                {props.name}
            </p>
            <p className="description">
                {parseStrToHTML(props.description)}
            </p>
        </li>
    )
}

export default TableItem
