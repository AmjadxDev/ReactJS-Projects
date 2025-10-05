import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContext from './contexts/UserContext'
import UserContextProvider from './contexts/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>welcome Here</h1>
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
