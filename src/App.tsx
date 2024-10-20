import React from 'react'

const App = () => {
  return (
    <div className='grid grid-cols-2 bg-slate-600'>
      <div className='bg-amber-400 h-20 col-span-2'>Nav</div>
      <div className='bg-lime-500 h-20 hidden lg:block'>Side</div>
      <div className='bg-blue-700 h-20 col-span-2 lg:col-span-1'>Main</div>
    </div>
  )
}

export default App