// import React from 'react'
import GameGrid from './Components/GameGrid'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className='grid grid-cols-2 bg-gray-900	 text-zinc-50	'>
      <NavBar/>
      <div className='bg-lime-500 hidden lg:block'>Side</div>
      <div className='col-span-2 lg:col-span-1'><GameGrid/></div>
    </div>
  )
}

export default App