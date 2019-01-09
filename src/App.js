import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchForm from 'containers/SearchForm'
import Results from 'containers/Results'
import Favourites from 'containers/Favourites'

import './index.css'

import { fetchData, fetchFavourites } from 'store/actions'
class App extends Component {
  componentDidMount(){
    this.props.fetchData()
    this.props.fetchFavourites()
  }

  render(){
    return(
      <div id="app">

        <header>
          <h1>Toronto Waste Lookup</h1>
        </header>

        <div className="container">
          <SearchForm />

          <Results />
        </div>

        {
          this.props.favourites.length > 0
          ? <Favourites />
          : false
        }

      </div>
    )
  }
}

const mapStateToProps    = state    => ({ favourites: state.waste.favourites }) 
const mapDispatchToProps = dispatch => bindActionCreators({ fetchData, fetchFavourites }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
