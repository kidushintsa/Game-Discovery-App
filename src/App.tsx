// import React from 'react'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className='grid grid-cols-2 bg-slate-600'>
      <NavBar/>
      <div className='bg-lime-500 hidden lg:block'>Side</div>
      <div className='bg-blue-700 col-span-2 lg:col-span-1'>Main</div>
    </div>
  )
}

export default App