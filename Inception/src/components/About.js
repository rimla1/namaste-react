import TeamMember from './TeamMember';

const About = () => {
  return (
    <div className='p-4 m-4 border border-solid border-black w-[400px] rounded-xl shadow-lg'>
      <h1 className='py-1'>Meet our team!</h1>
      <p className='py-1'>Coolest team ever</p>
      <TeamMember />
    </div>
  );
};

export default About;
