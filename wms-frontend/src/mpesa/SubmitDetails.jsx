import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axiosClient from '../AxiosClient'
import axios from 'axios'


const SubmitDetails = () => {
    const { ContId } = useParams()
    const [phone_number, setPhone] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit =(e)=>{
        e.preventDefault()


        if (phone_number === '' || amount===''){
            console.log('all fields required')
        } else{
            const payload = {
                phone_number: phone_number,
                amount: amount,
            }
            axios.post('http://100.25.196.173/mpesa/submit/', payload)
            .then((res)=>{
                console.log('res:', res.data.transaction_id)
                const pl ={
                    checkout_request_id: res.data.transaction_id,

                }
                axios.post('http://127.0.0.1:8000/mpesa/confirm/', pl)
                .then((r)=>{
                    console.log(r)

                })
                .catch((e)=>{
                    console.log(e)
                })
            })
            .catch((e)=>{
                console.log('err', e)
            })
            console.log(payload)
        }
    }


    return (
        <div className='bg-blue-800 h-screen'>
            <div className='  p-2 flex justify-center w-8/12'>
                <form onSubmit={handleSubmit} className='border md:w-4/12 mt-9 pl-3'>
                    <div className='text-center flex justify-around font-bold p-3 my-1 text-purple-200 text-xl'> 
                    <p>Pay using Mpesa</p>
                    <div title='Go Back'><Link to={`/addcontribution/${ContId}`}><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg></Link></div>
                    </div>
                    <p className='text-cente text-neutral-200 font-bold'>Contribution Id: {ContId} </p>
                    <div className='my-4'>
                        <label className='text-neutral-200  font-bold'>Phone</label> <br />
                        <input
                        type="text"
                        name='phone_number'
                        onChange={(e)=>setPhone(e.target.value)}
                        className=' md:w-8/12 w-10/12 p-1 h-7 text-neutral-200 rounded bg-transparent outline-none border'  />
                    </div>
                    <div className='my-4'>
                        <label className='text-neutral-200 font-bold'>Amount</label> <br />
                        <input
                            name='amount'
                            type='number'
                            onChange={(e)=>setAmount(e.target.value)}
                            className=' md:w-8/12 w-10/12 h-7 p-1 text-neutral-200 rounded bg-transparent outline-none border'/>
                    </div>

                    <div className='mt-4 mb-1'>
                        <button className='bg-green-400 text-lg text-neutral-200 rounded font-bold w-7/12'>Pay</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SubmitDetails