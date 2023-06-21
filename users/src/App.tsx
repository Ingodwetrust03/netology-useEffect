import './App.css'
import List from "./components/List";
import Details from "./components/Details";
import {UserIdProvider} from "./components/UserIdContext";
import usePolling from "./hooks/usePolling";

function App() {
    const USERS_API_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    const[{data: users, loading}] = usePolling(USERS_API_URL, [])



  return (
    <>
        <div className="users">
            <UserIdProvider>
                <List users={users} loading={loading}/>
                <Details />
            </UserIdProvider>
        </div>
    </>

  )
}

export default App
