import React, { Component } from 'react'
import './App.css'
import SearchInput from './Components/SearchInput'
import Divider from '@material-ui/core/Divider'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          Previsão do tempo
        </header>
        <SearchInput />
        <Divider variant="middle" style={{backgroundColor: 'white', width:'655px', alignSelf:'center' }} />
      </div>  
    );
  }
}

export default App
