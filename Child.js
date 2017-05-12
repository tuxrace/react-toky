import React, { Component, Children } from 'react'

class Child extends Component {
  render() {
    console.log(this.props)
    return <div>My name is {this.props.name}</div>
  }
}

export default Child
