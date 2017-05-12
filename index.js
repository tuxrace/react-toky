import React, { Component } from 'react'
import { render } from 'react-dom'
import { ReactToky, ReactTokyHOC } from './react-toky'
import Child from './Child'

class App extends Component {
  render() {
    return (
      <ReactToky>
        <div>
          <div>Hi {this.props.name} 👽 </div>   
          <div>Hi {this.props.name}</div>              
        </div>
      </ReactToky>
    )
  }
}

render(<App />, document.getElementById('root'))
