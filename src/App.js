import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import LoginRegistration from './components/LoginRegistration'

function App() {
  const [logged, setLogged] = useState(false)

  return (
    <div className='App'>
      {logged ? (
        <Dashboard setLogged={setLogged} />
      ) : (
        <LoginRegistration setLogged={setLogged} />
      )}
    </div>
  )
}

export default App
