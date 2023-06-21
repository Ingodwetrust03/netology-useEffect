import {useContext} from "react";
import {UserIdContext} from "./UserIdContext";


const ListItem = ({user}) => {
    const {userId, getUserId} = useContext(UserIdContext)

    return (
        <li className="list-group-item user" onClick={()=>userId !== user.id ? getUserId(user.id) : getUserId(userId)}>{user.name}</li>
    )
}

export default ListItem