
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Item from 'components/MaterialItem'

import { addFavourite } from 'store/actions'

import './results.css'
class Results extends Component {
    
    render(){
        return(
            <section id="results-container">
                 <ul id="material-list">
                    {
                        !this.props.results
                        ? <li>Empty</li>
                        : this.props.results.map((material, index) => 
                            <Item 
                                key={index}
                                name={material.title}
                                onClick={() => this.props.addFavourite(material)}
                                description={material.description}
                            />)
                    }
                </ul>
            </section>
        )
    }

}

const mapStateToProps    = state    => ({ results: state.waste.searchResults })
const mapDispatchToProps = dispatch => bindActionCreators({ addFavourite }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Results)
