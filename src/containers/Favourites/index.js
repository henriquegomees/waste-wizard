
import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Item from 'components/MaterialItem'

import { removeFavourite } from 'store/actions'

import './favourites.css'

const Favourites = props => (
    <section id="favourites-container">
        <div className="container">
            <header>
                <h2>Favourites</h2>
            </header>

            <ul className="material-list">
                {
                    props.favourites.map((material, index) => 
                    <Item 
                        key={index}
                        name={material.title}
                        onClick={() => props.removeFavourite(material, index)}
                        description={material.description}
                        title="Remove from favourites"
                    />)
                }
            </ul>
        </div>
    </section>
)

const mapStateToProps    = state    => ({ favourites: state.waste.favourites })
const mapDispatchToProps = dispatch => bindActionCreators({ removeFavourite }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
