import React, { Component } from 'react'

import SearchForm from 'containers/SearchForm'
import Results from 'containers/Results'
import Favourites from 'containers/Favourites'

import './index.css'

class App extends Component {
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

export default App
