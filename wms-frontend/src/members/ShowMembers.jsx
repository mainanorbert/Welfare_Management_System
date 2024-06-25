import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../ContextProvider';
import axiosClient from '../AxiosClient';
// import '../App.css';
import { Link } from 'react-router-dom';
import EditMembers from './EditMembers.jsx'
import DeleteMember from './DeleteMember.jsx';


const ShowMembers = ({ onDelete}) => {
  const [members, setMembers] = useState([]);
  const [amount, setAmount] = useState(0)
  const [showEdit, setShowEdit] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [showDelete, setShowDelete] = useState(false)
  const [selectedMember, setSelectedMember] = useState({})
  const noRows = 5
 
  const { token, user } = useAuth()
  console.log('token', token)

  const fetchMembers = async () => {
    try {
      // const res = await axios.get('http://nobertechx.tech/api/members/');
      const res = await axiosClient.get('/members/')
      console.log(res.data.total_amount)
      setAmount(res.data.total_amount)
      setMembers(res.data.members);
    } catch (error) {
      console.log('ee', error);
    }
  };
  useEffect(() => {
    fetchMembers();
  }, []);
  const totalPages = Math.ceil(members.length / noRows);
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }
  const startIndex = (currentPage - 1) * noRows;
  const currentMembers = members.slice(startIndex, startIndex + noRows);

  return (
    <div className='h-screen over-flow-y z-0 relative'>
      <div className='absolute z-10 mt-0 w-10/12'>{showEdit ? <EditMembers /> : ''}</div>

      <div className='absolute z-10 mt-0 w-10/12'>{showDelete ? <DeleteMember
      member={selectedMember}
      setShowDelete={setShowDelete}
      fetchMembers={fetchMembers}
       /> : ''}</div>

      <table className='min-w-full divide-y divide-gray-200'>
        <thead>
          <tr key='' className=''>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase '>No.</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Member No</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>First Name</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Second Name</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Id No.</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Reg. Amount</th>
            <th className='px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {
            currentMembers.map((member, index) => (
              <tr  key={member.id}>
                <td className='px-1 py-4 whitespace-nowrap'>{startIndex + index + 1}.</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.member_no}</td>
                <td className='bpx-1 py-4 whitespace-nowrap'>{member.firstname}</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.secondname}</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.phone_no}</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.email}</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.id_no}</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.reg_amount}</td>
                <td className='px-1 py-4 whitespace-nowrap'>{member.status === false ? 'Inactive' : 'Active'}</td>
                {token && user === 'nober' ? <td className='border-r px-1'>
                  <Link to={`/members/${member.id}`}><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg></Link>
                </td> : ''}
                {token && user === 'nober' ? <td onClick={() => setShowEdit(true)} className='border-r px-1'>
                  <div to={`/members/${member.id}`}><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg></div>
                </td> : ''}

                {token && user === 'nober' ? <td onClick={(() =>setShowDelete(true))}
                className='border-r px-1'>
                  <p onClick={()=>setSelectedMember(member)} className='b p-1 rounded text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                  </p>
                </td> : ''}
              </tr>
            ))
          }
       {members.length > 5?    <tr key="" className='border'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='font-bold text-lg text-neutral-300'></td>
            <td></td>
            <td className='p-1 underline font-bold text-neutral-200'></td>
            <td className='p-1 underline font-bold text-neutral-200'>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='p-1 underline font-bold text-neutral-200'>Prev</button>
            </td>
            <td className='p-1 underline font-bold text-neutral-200'></td>
            <td className='p-1 underline font-bold text-neutral-200'>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='p-1 underline font-bold text-neutral-200'>Next</button>
            </td>
          </tr>: ''}

          <tr key="" className='border'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='font-bold text-lg text-neutral-300'>Total Amount</td>
            <td></td>
            <td className='p-1 underline font-bold text-neutral-200'>{amount}</td>
            <td></td>
          </tr>
        </tbody>

      </table>

    </div>
  );
};

export default ShowMembers;
