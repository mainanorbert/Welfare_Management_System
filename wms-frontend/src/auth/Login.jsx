import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useAuth } from '../ContextProvider'

/**
 * Displays a login form and handles user authentication.
 * Uses the useAuth context for authentication state and actions.
 * @returns {JSX.Element} - The rendered component.
 */

const Login = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false);
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [iserror, setIsError] = useState(false);
  const { login, err, token } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === '' || password === '') {
      setErrorMessage('All fields are required')
      setIsError(true);
    }
    else {
      const payload = {
        username: username,
        password: password,
      }
      login(payload)
     
    }

  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  }, [token, navigate])
  
  useEffect(() => {
    if (iserror) {
      const timer = setTimeout(() => {
        setIsError(false)
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [iserror])

  const handleShowPassword = () => {
    setShowPass(!showPass);
  }
  useEffect(()=>{
    if (iserror){
      const timer =setTimeout(()=>{
        setIsError(false)
      }, 4000)
      return ()=>clearInterval(timer);
    }
  }, [iserror])
  return (
    <div className="w-full grid place-items-center pb-6 h-screen bg-blue-800" >
      <form className='md:w-3/12 w-8/12 relative border p-2 grid' onSubmit={handleSubmit} >

        {iserror && (<motion.div
          initial={{ sclae: 0, y: 0 }}
          animate={{ sclae: 1, y: 2 }}
          duration={{ duration: 4 }}
          className='bg-red-600 absolute w-full text-center p-1 text-white rounded'>
          {errorMessage}

        </motion.div>)}

        {err && (<motion.div
          initial={{ scale: 0, y: 0 }}
          animate={{ scale: 2, y: 2 }}
          duration={{ duration: 2 }}
          className='bg-red-600 absolute w-full text-center p-1 text-white rounded'>
          {err}

        </motion.div>)}
        <div className='flex justify-around'>
          <p className='text-center text-xl text-neutral-300 font-bold'>Login</p>
          <p className='' title='Home'> <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </Link></p>
        </div>

        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>username</label><br />
          <input
            type="text"
            name='username'
            onChange={(e) => setusername(e.target.value)}
            className=' w-full p-1 h-8 border rounded border bg-transparent outline-none text-neutral-200 font-ligh' />
        </div>
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Password</label><br />
          <input
            type={showPass ? 'text' : 'password'}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            className=' w-full p-1  h-8 border rounded border bg-transparent outline-none text-neutral-200 font-ligh' />
        </div>

        <div className='text-white p-2'>
          <input type="checkbox"
            checked={showPass}
            onChange={handleShowPassword}
          />
          <span>Show password</span>
        </div>

        <div className='w-full pl- justify-between'>
          <button className='bg-green-400 w-10/12 rounded font-bold text-neutral-300 hover:bg-green-500 h-8 '>Login</button>
          <div> <Link className="text-xs hover:font-bold text-neutral-300 underline" to="/register">Not Registered?</Link></div>
        </div>

      </form>
    </div>
  )
}

export default Login