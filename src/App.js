import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchForm from 'containers/SearchForm'
import Results from 'containers/Results'
import Favourites from 'containers/Favourites'

import './index.css'

import { fetchData } from 'store/actions'
class App extends Component {
  componentDidMount(){
    this.props.fetchData()
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

        <Favourites />

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch)
export default connect(null, mapDispatchToProps)(App)
