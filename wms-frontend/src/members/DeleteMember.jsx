import React from 'react'
import axiosClient from '../AxiosClient'

const DeleteMember = ({setShowDelete, member, fetchMembers}) => {

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/members/${member.id}`)
      
      setShowDelete(false)
      fetchMembers()  // Refresh the members list after deletion
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=' flex justify-center'>
        <div className=' w-10/12 flex justify-center'>
        <div className='border bg-white h-[8rem] w-[14rem]'>
          <p className='text-center'>Delete {member.firstname} from List?</p>
        <div className=' flex justify-between p-2 rounded mt-10'>
               
        <button onClick={()=>setShowDelete(false)} ><p className='bg-green-500 p-1 rounded text-white'>Cancel</p></button>
            <button onClick={handleDelete} ><p className='bg-red-500 p-1 rounded text-white'>Delete</p></button>
        </div>
        </div>
        
        </div>
        </div>
  )
}

export default DeleteMember