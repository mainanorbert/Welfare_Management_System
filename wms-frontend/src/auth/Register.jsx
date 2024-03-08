import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import axiosClient from '../AxiosClient'

const Register = () => {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [iserror, setIsError] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (name === '' || email === '' || password === '') {
            setErrorMessage('All fields are required')
            setIsError(true);
        }
        else {
            const payload = {
                username: name,
                email: email,
                password: password,
                
            }

            try {

            const res = await axiosClient.post('/auth/users/', payload)
            navigate('/login')
           

            } catch(e){

            }

               

        }

    }
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
    return (
        <div className="w-full grid   place-items-center pb-6 h-screen bg-blue-800" >
            <form className='md:w-3/12 w-8/12 relative border p-2 grid' onSubmit={handleSubmit} >
                {iserror && (<motion.div
                    initial={{ sclae: 0, y: 0 }}
                    animate={{ sclae: 1, y: 2 }}
                    duration={{ duration: 4 }}
                    className='bg-red-600 absolute w-full text-center p-1 text-white rounded'>
                    {errorMessage}

                </motion.div>)}
                
                <div className='flex justify-around'>
                <p className='text-center text-xl text-neutral-300 font-bold'>Register Here</p>
               <p className='' title='Home'> <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-8 h-8">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
             </Link></p>
                </div>
                <div className='p-2'>
                    <label className='text-neutral-300 font-bold '>Username</label><br />
                    <input
                        type="text"
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        className=' w-full p-1 h-8 border rounded border bg-transparent outline-none text-neutral-200 font-light' />
                </div>
                <div className='p-2'>
                    <label className='text-neutral-300 font-bold'>Email</label><br />
                    <input
                        type="text"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
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
                            name ='checkbox'
                        checked={showPass}
                        onChange={handleShowPassword}
                    />
                    <span>Show password</span>
                </div>

                <div className='w-full pl- justify-between'>
                    <button className='bg-green-400 w-10/12 rounded font-bold text-neutral-300 hover:bg-green-500 h-8 '>Register</button>
                    <div> <Link className="text-xs hover:font-bold text-neutral-300 underline" to="/login">Already Registered?</Link></div>
                </div>

            </form>
           
        </div>
    )
}

export default Register