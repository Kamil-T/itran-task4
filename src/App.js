import { useState } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import Toolbar from './components/Toolbar'
import LoginRegistration from './components/LoginRegistration'

function App() {
  const [logged, setLogged] = useState(false)

  return (
    <div className='App'>
      {logged ? (
        <>
          <Toolbar setLogged={setLogged} />
          <UserTable />
        </>
      ) : (
        <LoginRegistration setLogged={setLogged} />
      )}
    </div>
  )
}

export default App
