import React from 'react'

const DeleteMember = ({setShowDelete}) => {
  return (
    <div className=' flex justify-center'>
        <div className=' w-10/12 flex justify-center'>
        <div className='border bg-white h-[8rem] w-[12rem] flex justify-between p-2 rounded'>
        <button onClick={()=>setShowDelete(false)} ><p className='bg-green-500 p-1 rounded text-white'>Cancel</p></button>
            <button ><p className='bg-red-500 p-1 rounded text-white'>Delete</p></button>
        </div>
        
        </div>
        </div>
  )
}

export default DeleteMember