import axios from 'axios';
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import axiosClient from '../AxiosClient';
import { useAuth } from '../ContextProvider';
import mpesa from '/images/mpesa.png'


const AddContribution = () => {
    const { ContId } = useParams();
    const [amount, setAmount] = useState(0)
    const [memberNo, setMemberNo] = useState(null)
    const { user, token } = useAuth()
    const navigate = useNavigate()
    /**
     * Handles the form submission for adding a new contribution.
     * Validates the form fields and sends a POST request to the backend API.
     * Navigates to the contribution list page upon successful submission.
     */

    const handleSubmit = (e) => {
        e.preventDefault()
        if (amount === 0 || memberNo === '') {
            console.log('all fields need to be filled')
        }
        else {
            const payload = {
                cont_id: ContId,
                amount: amount,
                member_no: memberNo
            }
            axiosClient.post('/cont/allcontributions/', payload)
                .then((data) => {
                    console.log("success")
                    navigate(`/addcontribution/${ContId}/contributionlist/${ContId}`)


                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }

    return (
        <div className='bg-blue-800 h-screen overflow-y-scroll'>
            <div className='fle ml-2 justify-center md:w-10/12 md:space-x-4'>
                <div className='flex justify-center border-b border-1 mb-2 '>

                    <div className='mt-8 p-2 flex justify-center font-bold text-neutral-200'>
                        <Link to={`/mpesa/${ContId}`} className='bg-green-600 p-2 rounded-xl'>
                            <p className='text-xl'>Contribute with:</p>
                            <div className='bg-green-00 flex justify-center'>
                                <img className='' src={mpesa} width='100px' alt="mpesa logo" /></div>
                            <div>Contribution Id: {ContId}</div>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to={`contributionlist/${ContId}`} className=' mt-10 flex'>
                            <div className=' p-4'>
                                <div className='p-3 rounded-xl text-neutral-300 bg-green-600 py-10 text-lg'>View the Contribution List <br />
                                    <p>for Contribution ID: <i className='text-neutral-200 font-bold text-xl'>{ContId}</i></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='mt-2' title='Back to Contribution'>
                        <Link to='/contributions'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg></Link>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='text-neutral-200 basis-1/2 bg-green-00'>
                    If You have Made welfare contribution for  contribution ID <span className='underline'>{ContId}</span>,
                     please contact Admin for your name to
                     be updated in the list.         Update will take some time and your name will be seen in the list within 24 hours after payment.
                        Click the contribution list button above to view the updated list
                    </div>
                    {token && user === 'nober'? <form
                    className='border text-neutral-300  md:w-3/12 w-8/12 mt-4 p-2 mt-10'
                    onSubmit={handleSubmit}
                >

                    <div className=''>
                        <h2 className='font-bold text-lg text-neutral-200'>Admin Update on Contributions</h2>

                    </div>
                    <div className='w-full mt-4'>
                        <label className='font-bold text-neutral-200'>Contribution ID</label> <br />
                        <input className='w-full p-1 outline-none border bg-transparent'
                            type="number"
                            value={ContId}
                            disabled
                        />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold text-neutral-200'>Amount</label> <br />
                        <input className=' p-1 w-full outline-none border bg-transparent'
                            type="number"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold text-neutral-200'>Member No</label> <br />
                        <input className='  p-1 w-full outline-none border bg-transparent'
                            type="text"
                            onChange={(e) => setMemberNo(e.target.value)}
                        />
                    </div>
                    <div className='mt-2 flex h-8 '>
                        <button className='w-7/12 rounded bg-green-500 text-neutral-200 font-bold'>Submit</button>
                    </div>
                </form>:''}
                </div>
            </div>
        </div>
    )
}

export default AddContribution
