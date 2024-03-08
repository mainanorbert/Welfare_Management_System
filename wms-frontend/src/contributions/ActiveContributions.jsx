import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../AxiosClient'


/**
 * ActiveContributions component displays a list of active contributions in the welfare system.
 * It fetches the contributions from the backend API and renders them as clickable items.
 */

const ActiveContributions = () => {
  const [contributions, setContributions] = useState([])



  useEffect(() => {
    const getContributions = async () => {
      try {
        // const res = await axios.get('http://127.0.0.1:8000/api/cont/contributions/');
        const res = await axiosClient.get('/cont/contributions/')

        setContributions(res.data)
        console.log('response:', res.data)

      }
      catch (err) {
        console.log(err)
      }
    }
    getContributions()
  }, [])
  // Render the component
  return (
    <div className='bg-blue-00 h-screen verflow-y-scroll'>
      <div className='text-center font-bod text-2xl text-blue-800'>
        Active Contributions Running in our Welfare
      </div>
      <div className=' flex justify-center gap-3 p-4'>
        <div className='md:grid md:grid-cols-4 md:gap-8 md:w-10/12 '>
          {contributions.map((contribution) => (
            <div key={contribution.id}
              className='border bg-blue-800 rounded p-1 m-2'>
              <Link to={`/addcontribution/${contribution.contribution_number}`} key={contribution.id} >
                <h2 className=' font-bold text-neutral-300 mt-1'> Type: <i className='text-yellow-200 font-light'>{contribution.cont_type}</i>
                </h2>
                <h3 className='font-bold text-neutral-300 mt-1'>Contribution ID:
                  <i className='rounded-full font-light text-yellow-300 py-1 p-1 border text-white'> {contribution.contribution_number}</i>
                </h3>
                <div className='font-bold text-neutral-300 mt-1 content-none'> Description:
                  <i className='text-yellow-200 font-light whitespace-norma '>{contribution.description}</i>
                </div>
              </Link>
              
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ActiveContributions
