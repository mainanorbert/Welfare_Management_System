import React, { useEffect, useState } from 'react'
import NavBar from '../home/NavBar'
import axios from 'axios'
import axiosClient from '../AxiosClient'
import { useAuth } from '../ContextProvider'


/**
 * Component for displaying accounting information.
 * 
 * Displays overall breakdown and per contribution breakdown.
 */

const Accounting = () => {
    const [contAmount, setContAmount] = useState(0)
    const [membershipAmount, setMembershipAmount] = useState(0)
    const [total, setTotal] = useState(0)
    const [perId, setPerId] = useState([])
    const [contTotal, setContTotal] = useState(0)
    const {token, user}= useAuth()


    useEffect(() => {
        const ShowAccounts = async () => {
            try {
                const res = await axiosClient.get("/acc/accounting/")
                setContAmount(res.data.cont_amount)
                setMembershipAmount(res.data.membership_amount)
                setTotal(res.data.totals)

            } catch (e) {
                console.log(e)

            }
        }
        ShowAccounts()
    }, [])

    useEffect(() => {
        const ShowPerId = async () => {
            try {
                const r = await axiosClient.get("/acc/perId/")
                setPerId(r.data.cont_data)
                setContTotal(r.data.total_contribution)

                console.log('r', perId)
            } catch (e) {
                console.log(e)

            }
        }
        ShowPerId()
    }, [])
    return (
        <div className='h-screen overflow-y-auto bg-purple-500'>
            <div className='bg-purple-400'><NavBar /></div>
            <div className='text-center bg-purple-30 font-bold text-neutral-200 text-4xl'>Welcome to Admin Panel</div>
            <div className='text-xl ml-12'>Get Breakdowns of Various Welfare Activities and running contributions breakdowns</div>
            <div className='md:flex justify-center bg-geen-500 space-x-0 mt-'>

                <div className='flex bg-gren-300 border-r justify-center md:w-6/12 pl-8'>
                    <div className=' p-2 w-full'>
                        <h1 className='text-2xl text-neutral-300'>Overall Breakdown</h1>
                        <p className='w-/12'>Below is a breakdown of all cash available
                            and sources:</p>
                        <table className='table-auto w-8/12'>
                            <thead>
                                <tr className='border text-left text-neutral-300' key="">
                                    <th className='border pl-2'>Source</th>
                                    <th className='border pl-2'>Amount</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='border text-neutral-300 font-light' key="">
                                    <td className='border pl-2'>Membership Registration</td>
                                    <td className='pl-2'>{membershipAmount}</td>
                                </tr>
                                <tr className='border text-neutral-300 font-light' key="">
                                    <td className='border pl-2'>Members Contributions</td>
                                    <td className='pl-2'>{contAmount}</td>
                                </tr>

                                <tr className='underline text-white font-bold text-neutral-300 border' key="">
                                    <td className='pl-2'>Total</td>
                                    <td className='underline font-bold pl-3'>{total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='md:w-6/12 flex border-l justify-end bggreen-900 ml-[7rem] p-2'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl text-neutral-300'>Breakdown Per Contribution</h1>
                        <h1 className='w-/12'>Below is the breakdown of all Running Contributions</h1>
                        <table className='table-auto border w-8/12'>
                            <thead>
                                <tr key="" className='border font-bold text-neutral-300'>
                                    <th className='border-r text-left pl-2'>Contribution ID</th>
                                    <th className='border-r text-left pl-2'>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {perId.map((p) => (
                                    <tr key="" className='border '>
                                        <td className='border-r pl-2 font-light text-neutral-200'>{p.cont_id}</td>
                                        <td className='pl-2 underline font-light text-neutral-200'>{p.total_amount}</td>
                                        {token && user === 'nober'?<td><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg></td>:''}
                                    {token && user === 'nober'? <td><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg></td>:''}
                                    </tr>
                                ))}
                                <tr className='underline text-white font-bold text-neutral-300 border' key="">
                                    <td className='pl-2'>Total</td>
                                    <td className='underline font-bold pl-3'>{contTotal}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounting