import React from 'react'
import Nav from './Components/Nav'
import Inputfield from './Components/Inputfield'
import DisplayWork from './Components/DisplayWork'
import Filter from './Components/Filter'


function App() {

  return (
    <div className='layout'>
      <Nav/>
      <Inputfield/>
      <DisplayWork/>
      <Filter/>
    </div>
  )
}

export default App