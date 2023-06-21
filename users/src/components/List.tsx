import ListItem from "./ListItem";



const List = ({loading, users}) => {
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