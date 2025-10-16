import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to={'/'} className='hover:underline text-sm font-medium text-white'>login</Link>
    </div>
  )
}

export default Dashboard