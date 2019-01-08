import React, { Component } from 'react'

import SearchForm from 'containers/SearchForm'

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
        </div>

      </div>
    )
  }
}

export default App
