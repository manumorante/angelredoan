import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen overflow-hidden'>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
