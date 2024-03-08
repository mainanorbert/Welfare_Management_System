import React, { useEffect, useState } from 'react';
import { useAuth } from '../ContextProvider';
import axiosClient from '../AxiosClient';
import { Link } from 'react-router-dom';

const Pag = () => {
    const [members, setMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [membersPerPage] = useState(5);
    let x = 0 

    const { token, user } = useAuth();

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const res = await axiosClient.get('/members');
                setMembers(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMembers();
    }, []);

    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(members.length / membersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='h-screen over-flow-y'>
            <table className='table-auto bg-purple-600 md:w-full'>
                <thead>
                    <tr key='' className='text-neutral-300 md:text-sm text-xs'>
                        <th className='border-r md:px-1'>No.</th>
                        <th className='border-r md:px-4'>Member No</th>
                        <th className='border-r md:px-4'>First Name</th>
                        <th className='border-r md:px-2'>Second Name</th>
                        <th className='border-r md:px-2'>Phone</th>
                        <th className='border-r md:px-2'>Email</th>
                        <th className='border-r md:px-2'>Id No.</th>
                        <th className='border-r md:px-2'>Reg. Amount</th>
                        <th className='border-r md:px-2'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentMembers.map((member, index) => (
                        <tr className='border md:text-sm text-xs' key={member.id}>
                            <td className='border-r text-neutral-200'>{member.id}.</td>
                            <td className='border-r'>{member.member_no}</td>
                            <td className='border-r'>{member.firstname}</td>
                            <td className='border-r'>{member.secondname}</td>
                            <td className='border-r'>{member.phone_no}</td>
                            <td className='border-r'>{member.email}</td>
                            <td className='border-r'>{member.id_no}</td>
                            <td className='border-r'>{member.reg_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <div className="flex">
                {pageNumbers.map(number => (
                    <p key={number} className="page-item">
                        <button onClick={() => setCurrentPage(number)} className="page-link">
                            {number}
                        </button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Pag;
