import ListItem from "./ListItem";
import {useContext} from "react";
import {UserContext} from "./UserContext";



const List = () => {
    const {users, loading} = useContext(UserContext)

    return (
        <>
            {loading ? <p>loading...</p> : ''}
            <ul className="list-group users">
                {users.map(user => <ListItem user={user} key={user.id}/>)}
            </ul>
        </>
    )
}

export default List