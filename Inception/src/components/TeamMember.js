import { useState, useEffect } from 'react';

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/team-members');
    const jsonData = await data.json();
    setTeamMembers(jsonData);
  };

  return (
    <div className='team-members-container'>
      {teamMembers.map((teamMember) => {
        return (
          <div className='team-member' key={teamMember.role}>
            <img className='team-member-img' src={teamMember.image} />
            <h1>{teamMember.fullName}</h1>
            <h2>{teamMember.role}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
