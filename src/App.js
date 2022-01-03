import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserProvider from './UserContext'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

function App() {
  return (
    <UserProvider>
      <Router>
        {/* Navbar */}
        <div className='bg-slate-800 h-16 flex justify-evenly items-center text-4xl text-white'>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/profile'>Profiles</Link>
        </div>
        {/*  */}

        {/* Content */}
        <div className='text-4xl flex justify-around mt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>{' '}
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
