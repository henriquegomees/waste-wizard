
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from 'components/Table'

import './results.css'
class Results extends Component {
    
    render(){
        return(
            <section id="results-container">
                <Table materials={this.props.results}/>
            </section>
        )
    }

}

const mapStateToProps = state => ({ results: state.waste.searchResults })
export default connect(mapStateToProps)(Results)
