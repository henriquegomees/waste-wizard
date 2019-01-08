
import React, { Component } from 'react'

import Table from 'components/Table'

import './favourites.css'

class Favourites extends Component {
    
    render(){
        return(
            <section id="favourites-container">
                <div className="container">
                    <header>
                        <h2>Favourites</h2>
                    </header>

                    <Table />
                </div>
            </section>
        )
    }

}

export default Favourites
