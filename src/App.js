import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress'

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
    if( this.props.materials.length === 0 ){
      return(
        <div className="progress-wrapper">
          <CircularProgress />
        </div>
      )
    }
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

const mapStateToProps    = state    => ({ favourites: state.waste.favourites, materials: state.waste.materials }) 
const mapDispatchToProps = dispatch => bindActionCreators({ fetchData, fetchFavourites }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
