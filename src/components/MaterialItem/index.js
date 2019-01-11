
import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star'

import './material-item.css'
class MaterialItem extends Component {
    constructor(props){
        super(props)
        this.item = React.createRef()
    }

    _parseStrToHTML(str) {
        let txt = document.createElement( 'textarea' )
        txt.innerHTML = str
        return txt.value
    }

    componentDidMount(){
        const node    = this.item.current
        const htmlStr = this._parseStrToHTML(this.props.description)
        node.insertAdjacentHTML('beforeend', htmlStr)
    }

    render(){
        return (
            <li className="row">
                <div className="name">
                    <button 
                        className="star-btn" 
                        onClick={this.props.onClick}
                        title={this.props.title}
                    >
                        <StarIcon id="star-icon" className={this.props.isFav ? 'favorited' : ''} />
                    </button>
                    <h2>{this.props.name}</h2>
                </div>

                <div className="description" ref={this.item}></div>
            </li>
        )
    }
}

export default MaterialItem
