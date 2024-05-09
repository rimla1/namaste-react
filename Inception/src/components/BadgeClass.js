import { Component } from 'react';

class BadgeClass extends Component {
    constructor(){
        super()
        console.log('Constructor in Child1 Class-based Component')
    }

    componentDidMount(){}

    render(){
        return(
            <h1>BADGE</h1>
        )
    }

}

export default BadgeClass