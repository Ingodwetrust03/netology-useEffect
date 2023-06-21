import {createContext, useState} from "react";
import usePolling from "../hooks/usePolling";


export const UserIdContext = createContext(undefined)


export const UserIdProvider = ({children}) => {
    const [userId, setUserId] = useState(undefined)

    const getUserId = (id) => {
        setUserId(id)
    }

    const USER_API_URL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`

    const[{data: user}] = usePolling(USER_API_URL, {
            "id": undefined,
            "name": "",
            "avatar": "",
            "details": {
                "city": "",
                "company": "",
                "position": ""
            }
    })


    return (
        <UserIdContext.Provider value={{userId, user, getUserId}}>
            {children}
        </UserIdContext.Provider>
    )
}