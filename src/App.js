import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Button from 'material-ui/RaisedButton'
import Table from './table'
import players from './players.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  fetchPlayers = () => {
    // Qui dovresti chiamare le APi, possibilmente utilizzando la fetch con qualcosa simile a 
    // fetch(url) // Call the fetch function passing the url of the API as a parameter
    // .then(function(players) {
    // this.setState({ players: res.players })
    // })
    // .catch(function() {
    //     // This is where you run code if the server returns any errors
    // })
    this.setState({ players: players })
  }

  render() {
    return (

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Players</h1>
          </header>
          <div className="App-intro">
            <Button
              primary
              label="Fetch Players"
              onClick={this.fetchPlayers}
              style={{ marginTop: '20px '}}
            />
            <Table players={this.state.players} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
