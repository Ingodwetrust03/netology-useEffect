import {createContext, useState} from "react";
import useFetch from "../hooks/useFetch";


export const UserContext = createContext(undefined)


export const UserProvider = ({children}) => {
    const [userId, setUserId] = useState(undefined)

    const getUserId = (id) => {
        setUserId(id)
    }

    const USERS_API_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    const[users, loading] = useFetch(USERS_API_URL, [], userId === null)

    const USER_API_URL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`
    const[user] = useFetch(USER_API_URL, {
            "id": undefined,
            "name": "",
            "avatar": "",
            "details": {
                "city": "",
                "company": "",
                "position": ""
            }
    }, userId)


    return (
        <UserContext.Provider value={{users, loading, userId, user, getUserId}}>
            {children}
        </UserContext.Provider>
    )
}