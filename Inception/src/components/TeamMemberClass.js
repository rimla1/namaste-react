import React from 'react';
import BadgeClass from './BadgeClass';

class TeamMemberClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor in Parent1 Class-based Component')
  }

  componentDidMount(){}

  render() {
    const { fullName, role } = this.props;
    const { count } = this.state;
    return (
      <div className='team-members-container'>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment Count
        </button>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          Decrement Count
        </button>
        <BadgeClass />
        <div className='team-member' key='1233'>
          <img
            className='team-member-img'
            src='https://img.freepik.com/premium-photo/generative-ai-middle-aged-businessman-posing-isolated-background_108985-3569.jpg'
          />
          <h1>{fullName}</h1>
          <h2>{role}</h2>
        </div>
      </div>
    );
  }
}

export default TeamMemberClass;
