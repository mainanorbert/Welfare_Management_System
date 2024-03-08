import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axiosClient from '../AxiosClient'
import { useScroll } from 'framer-motion'
import NavBar from '../home/NavBar'
import { useNavigate } from 'react-router-dom'

const EditMembers = () => {
    const [isErr, setIsError] = useState(false)
    const [sub, setSubMit] = useState(false)
    const [member, setMember] = useState({})
    const { Id } = useParams()
    const navigate = useNavigate()
    // const [firstname, setFirstname] = useState('')
    // const [secondname, setSecondname] = useState('')
    // const [reg_no, setReg_no] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [id_no, setId_no] = useState('')
    // const [reg_amount, setReg_amount] = useState('')
    // const [status, setStatus] = useState(false)

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const res = await axiosClient.get(`/members/${Id}/`)
                setMember(res.data)
                console.log(res.data)
            }
            catch (e) {
                console.log(e)
            }
        }

        fetchMember();
    }, [Id])

    const handleSubmit = (e) => {
        e.preventDefault()
       try{
        axiosClient.put(`/members/${Id}/`, member)
        .then((data)=>{
        console.log('success')
        setSubMit(true)
        navigate('/members')

        })
        .catch((err)=>{
            console.log('failure')
            setIsError(true)

        })
       } catch(e){
        console.log('error')

       }

    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? !member.status : value;
        setMember(prevState => ({
            ...prevState,
            [name]: newValue
        }));

    };

    useEffect(()=>{
        if (isErr){
            const timer = setTimeout(()=>{
                setIsError(false)

            }, 4000)
            return ()=>clearInterval(timer)
        }
        

    })
    return (


        <div className='overflow-scroll'>
       <div className='mb-2'> <NavBar/></div>

            <div className='w-full flex justify-center h-screen  '>
                <form
                    onSubmit={handleSubmit}
                    className=' md:w-4/12 w-10/12 p-2 border  bg-purple-700'>
                    {isErr ? <div className='bg-red-700 p- rounded text- a text-white text-center w-full'>
                    A Required Field Empty</div> : sub ?
                    <div className='bg-green-400 p- rounded text- a text-white text-center w-full'>Updated Successfully</div>:''}
                   
                    <div className='flex justify-around mb-4' title='members list'>
                    <h1 className='text-center text-neutral-100 font-bold text-xl'>Update a Member</h1>
                    <p><Link to='/members'><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  </Link></p></div>
                    <div className=''>
                        <label className='font-bold  text-neutral-300'>First Name</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                            name='firstname'
                            value={member.firstname || ''}
                            onChange={handleChange}

                            type="text" />
                    </div>

                    <div className=''>
                        <label className='font-bold  text-neutral-300'>Second Name</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none' name='secondname'
                            type="text"
                            value={member.secondname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className=''>
                        <label className='font-bold text-neutral-300'>Member. No</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                            name='member_no'
                            type="text"
                            value={member.member_no}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=''>
                        <label className='font-bold text-neutral-300'>Id. No</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                            name='id_no'
                            type="text"
                            value={member.id_no}
                            onChange={handleChange}
                        />
                    </div>

                    <div className=''>
                        <label className='font-bold text-neutral-300'>Phone No.</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                            name='phone_no'
                            type="text"
                            value={member.phone_no}
                            onChange={handleChange}
                        />
                    </div>

                    <div className=''>
                        <label className='font-bold text-neutral-300'>Email</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                            name='email'
                            value={member.email}
                            type="email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className=''>
                        <label className='font-bold text-neutral-300'>Registration Amount</label> <br />
                        <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                            name='reg_amount'
                            type="number"
                            value={member.reg_amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className=''>
                        <label className='font-bold text-xs text-neutral-300'>Status</label> <br />
                        <input
                            type='checkbox'
                            name='status'
                            checked={member.status}
                            onChange={handleChange}
                            className='rounded p-1 h-6  text-neutral-300 border bg-transparent outline-none' />
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-green-400 w-6/12 text-neutral-200 font-bold h-8 rounded-xl'>Update</button>
                    </div>
                </form></div>

        </div>
    )
}

export default EditMembers