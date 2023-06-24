import './App.css'
import List from "./components/List";
import Details from "./components/Details";
import {UserProvider} from "./components/UserContext";

function App() {

  return (
    <>
        <div className="users">
            <UserProvider>
                <List />
                <Details />
            </UserProvider>
        </div>
    </>

  )
}

export default App
