
import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search'

import './form.css'

export default class SeachForm extends Component {
    render(){
        return(
            <form id="search-form">
                <input type="text" placeholder="Search" />

                <button type="submit">
                    <SearchIcon fontSize="large" id="search-icon"/>
                </button>
            </form>
        )
    }
}
