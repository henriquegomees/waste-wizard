
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchIcon from '@material-ui/icons/Search'

import './form.css'

import { searchResults } from 'store/actions'

class SearchForm extends Component {
    state = {
        input: 'takeout'
    }

    _handleSubmit(e){
        e.preventDefault()
        const { input }     = this.state
        const { wasteMaterials } = this.props
        if( input === '' ){
            alert('Search field is required')
            return
        }

        let materials = []
        let match   = 0
        wasteMaterials.map(material => {
            match = material.keywords.search( input.toLowerCase() )
            if( match !== -1 ){ materials.push( material ) }
        })
        
        materials.length > 0 ? this.props.searchResults( materials ) : alert('Material not found.')
    }

    render(){
        return(
            <form id="search-form" onSubmit={ this._handleSubmit.bind(this) }>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={this.state.input}
                    onChange={e => this.setState({ input: e.target.value })}
                />

                <button type="submit">
                    <SearchIcon fontSize="large" id="search-icon"/>
                </button>
            </form>
        )
    }
}

const mapStateToProps    = state    => ({ wasteMaterials: state.waste.materials })
const mapDispatchToProps = dispatch => bindActionCreators({ searchResults }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
