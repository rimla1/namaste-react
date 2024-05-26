import { useContext } from 'react'
import UserContext from '../utils/UserContext'


const Grocery = () => {
    const {username} = useContext(UserContext)

    return (
        <div>
            <h1>Grocery Shop with a lot of components here all different then restaurant logic</h1>
            <p>Buy Chili Chips</p>
            <p>{username}</p>
        </div>
    )
}

export default Grocery