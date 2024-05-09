import React from 'react';
import MessageFromTeam from './messageFromTeamClass';
import TeamMemberClass from './TeamMemberClass';

class AboutClass extends React.Component {
  constructor() {
    super()
    console.log('Constructor in GrandParent Class-based Component')
  }

  componentDidMount(){}

  render() {
    return (
      <div>
        <h1>Meet our team!</h1>
        <p>Coolest team ever</p>
        <TeamMemberClass
          fullName='Almir Muminovic'
          role='Junior Backend Engineer'
        />
        <MessageFromTeam />
      </div>
    );
  }
}

export default AboutClass;
