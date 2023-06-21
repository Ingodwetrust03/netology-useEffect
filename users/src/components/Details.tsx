import {useContext} from "react";
import {UserIdContext} from "./UserIdContext";


const Details = () => {
    const {user, userId} = useContext(UserIdContext)

    const userProfile = <ul className="list-group user-profile" id={userId}>
        <li className="list-group-item"><img src={user.avatar} alt={user.name} /></li>
        <li className="list-group-item"><h3>{user.name}</h3></li>
        <li className="list-group-item">City: {user.details['city']}</li>
        <li className="list-group-item">Company: {user.details['company']}</li>
        <li className="list-group-item">Position: {user.details['position']}</li>
    </ul>

    return (
        userId === undefined ? '' : userProfile
    )
}

export default Details