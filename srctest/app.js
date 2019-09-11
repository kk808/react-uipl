import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Box} from '../src/index.js'

const App = () => {
  return (
    <div>
      <Button>Standard</Button>
      <Button action>Standard</Button>

      <Box>Standard</Box>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
