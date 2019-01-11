
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Item from 'components/MaterialItem'

import { addFavourite, removeFavourite } from 'store/actions'

import './results.css'
class Results extends Component {

    _handleClick(material){
        material.isFav === true
        ? this.props.removeFavourite(material)
        : this.props.addFavourite(material)
    }
    
    render(){
        return(
            <section id="results-container">
                 <ul className="material-list">
                    {
                        this.props.results.map((material, index) => 
                        <Item 
                            key={index}
                            name={material.title}
                            isFav={material.isFav}
                            onClick={() => this._handleClick(material)}
                            description={material.description}
                            title={material.isFav === true ? 'Remove from favourites' : 'Add to favourites'}
                        />)
                    }
                </ul>
            </section>
        )
    }

}

const mapStateToProps    = state    => ({ results: state.waste.searchResults })
const mapDispatchToProps = dispatch => bindActionCreators({ addFavourite, removeFavourite }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Results)
