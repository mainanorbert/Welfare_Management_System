import React, { useState, useEffect } from 'react';
import axiosClient from '../AxiosClient';
import ShowMembers from './ShowMembers';
import DeleteMember from './DeleteMember';

const MembersManager = () => {
  const [members, setMembers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  const fetchMembers = async () => {
    try {
      const res = await axiosClient.get('/members/');
      setMembers(res.data.members);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleDeleteMember = (member) => {
    setMemberToDelete(member);
    setShowDelete(true);
  };

  return (
    <div className=''>
      <ShowMembers members={members} onDelete={handleDeleteMember} />
      {showDelete && (
        <DeleteMember
          setShowDelete={setShowDelete}
          member={memberToDelete}
          fetchMembers={fetchMembers}
        />
      )}
    </div>
  );
};

export default MembersManager;
