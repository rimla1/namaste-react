import { useState, useEffect } from 'react';

const TeamMember = () => {
  const [teamMember, setTeamMember] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://api.github.com/users/rimla1');
    const jsonData = await data.json();
    console.log(jsonData)
    setTeamMember(jsonData);
  };

  return (
    <div className='team-members-container'>
      <div className='team-member'>
        <img className='team-member-img' src={teamMember?.avatar_url} />
        <h1>{teamMember?.name}</h1>
        <h2>{teamMember?.bio}</h2>
      </div>
    </div>
  );
};

export default TeamMember;
