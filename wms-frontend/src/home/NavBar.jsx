import React, { useState, useEffect } from 'react'
import '../App.css'
import wms from '../images/wms5.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../ContextProvider'
import axios from 'axios'
import axiosClient from '../AxiosClient'



const NavBar = () => {
  const [hide, setHide] = useState(true)
  const { token, logout, setUser, user } = useAuth()
  const navigate = useNavigate()
  const [u, setU] = useState('')


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRes = await axiosClient.get('/auth/users/me/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setUser(userRes.data.username)
        setU(userRes.data.username)
        console.log('user', userRes)
      }
      catch (e) {
        console.log('failed to fetch user')
      }
    }
    if (token) {
      fetchUser()
    }
  }, [token])

  const handleLogout = async () => {
    try {
      await axiosClient.post('/auth/token/logout/', null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      logout()
      navigate('/')
      window.location.reload();



    }
    catch (e) {
      console.log("failed logout")
    }

  }

  return (
    <div className='relative mt-0 w-full'>

      <div className='md:flex justify-between shadow-xl  pb-1 '>
        <div className=' md:w-3/12 pl-4 space-x-3 flex items-center justify-between'>
          <img className='rounded-full ' width='70px' src={wms} alt="" />
          <div className='text-blue-800 hover:underline'><Link to='/contributions'>Contributions</Link></div>
          <div className='text-blue-800 hover:underline'><Link to='/'>Home</Link></div>
          {token && user === 'nober'? <div className='text-blue-800 hover:underline text-xs'><Link to='/accounting'>Admin Panel</Link></div>:''}
          <button
            className='p-4 md:hidden'
            onClick={(e) => setHide(!hide)}><svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {hide && (<nav className='w-3/12 md:flex block md:space-x-0 space-x-1 justify-around pt-4'>
          {token ? <div className='md:flex justify-between md:w-10/12 pl-'>
            <div>Welcome, {u}</div>
            
            <div className='text-blue-800 text-sm '> <button className='hover:underline' onClick={handleLogout}>logout</button></div>
          </div> : (
            <div className='pl-2 md:flex md:space-x-6 items-center space-y-1'>
              <div>
                <Link className='block bg-green-400 rounded text-center p-1 text-s hover:bg-green-500 hover:text-purple-300 text-purple-200' to='/register' >Register</Link></div>

              <div>
                <Link className='block bg-green-400 rounded text-center p-1 hover:bg-green-500 hover:text-purple-300 text-purple-200' to='/login'>Login</Link></div>
            </div>
          )}
        </nav>)}
      </div>


    </div>
  )
}

export default NavBar