# react-toky
React voice recognition component that works as a component or a higher order component

### Usage as a component
    import { ReactToky } from 'react-toky'
    const MyApp = () => (
      <ReactToky>
        <div>
          My App!
        </div>
      </ReactToky>)
    
    eexport default MyApp

### Usage as a Higer order component

    import { ReactTokyHOC } from 'react-toky'
    const MyApp = () => (
      <div> My App! </div>
    )

    export default ReactTokyHOC(MyApp)

### Voice
A toggle button to enable voice recognition on and off

    import { ReactTokyHOC, Voice } from 'react-toky'

    const MyApp = () => (
      <div> 
        <Voice />
      </div>
    )

    export default ReactTokyHOC(MyApp)
