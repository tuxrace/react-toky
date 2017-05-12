import React, { Component } from 'react'

 export const ReactTokyHOC = WrappedComponent => {
   return class extends Component{
     render(){
       const newProps = {name: 'Hedwig'}
       return (
        <WrappedComponent {...this.props} {...newProps} />
        )
     }
   }
 }


export class ReactToky extends Component{
  render(){
    return this.props.children
  }
}