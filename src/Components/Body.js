import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'

const Body = () => {
  return (
    <div className='flex grid grid-flow-col'>
        <Sidebar/>
        <Maincontainer/>
    </div>
  )
}

export default Body