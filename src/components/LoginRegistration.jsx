import { useState } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import Login from './Login'
import Registration from './Registration'

const LoginRegistration = ({ setLogged }) => {
  const [registered, setRegistered] = useState(false)

  return (
    <>
      <ButtonToolbar>
        <Button onClick={() => setRegistered(false)}>Registration</Button>
        <Button onClick={() => setRegistered(true)}>Login</Button>
      </ButtonToolbar>
      <div>
        {registered ? (
          <Login setLogged={setLogged} />
        ) : (
          <Registration setRegistered={setRegistered} setLogged={setLogged} />
        )}
      </div>
    </>
  )
}

export default LoginRegistration
