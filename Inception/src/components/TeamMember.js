import { useState, useEffect } from 'react';

const TeamMember = () => {
  const [teamMember, setTeamMember] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://api.github.com/users/rimla1');
    const jsonData = await data.json();
    setTeamMember(jsonData);
  };

  return (
    <div>
      <div >
        <img className='rounded-2xl shadow-lg h-40 w-40' src={teamMember?.avatar_url} />
        <h1 className='py-1'>{teamMember?.name}</h1>
        <h2 className='py-1'>{teamMember?.bio}</h2>
      </div>
    </div>
  );
};

export default TeamMember;
