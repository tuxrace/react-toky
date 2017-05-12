import React, { Component } from 'react'
import { render } from 'react-dom'
import { ReactToky, ReactTokyHOC } from './react-toky'

class App extends Component {
  render() {
    return (
      <ReactToky>
        <div> Hello {this.props.name} </div>
      </ReactToky>
    )
  }
}

render(<App />, document.getElementById('root'))
