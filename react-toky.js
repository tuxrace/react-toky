import React, { Component, cloneElement } from 'react'

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
    const { children } = this.props
    const newProps = {name:'Dennis'}    
    return (<div>{cloneElement(children, newProps)}</div>)
  }
}

export class Voice extends Component{

}