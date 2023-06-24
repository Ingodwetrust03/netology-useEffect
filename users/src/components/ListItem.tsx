import {useContext} from "react";
import {UserContext} from "./UserContext";


const ListItem = ({user}) => {
    const {userId, getUserId} = useContext(UserContext)

    return (
        <li className="list-group-item user" onClick={()=>userId !== user.id ? getUserId(user.id) : getUserId(userId)}>{user.name}</li>
    )
}

export default ListItem