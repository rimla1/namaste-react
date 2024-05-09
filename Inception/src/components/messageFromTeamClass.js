import { Component } from 'react';
import BadgeClass from './BadgeClass';

class MessageFromTeam extends Component {
    constructor(){
        super()
        console.log('Constructor in Parent2 Class-based Component')
    }

    componentDidMount(){}

    render(){
        return (
            <div>
                <h1>Thank you for using our website</h1>
                <BadgeClass />
                <p>Coolest team ever!</p>
            </div>
        )
    }
}

export default MessageFromTeam