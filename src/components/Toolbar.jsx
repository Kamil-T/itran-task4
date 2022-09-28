import { useEffect } from 'react'
import { db, auth, logout, userDelete } from '../firebase'
import { ref, update } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faUserXmark } from '@fortawesome/free-solid-svg-icons'

const Toolbar = ({ setLogged }) => {
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) setLogged(false)
  })
  return (
    <ButtonToolbar>
      <Button variant='danger'>Block</Button>
      <Button variant='light'>
        <FontAwesomeIcon icon={faUnlock} />
      </Button>
      <Button onClick={userDelete} variant='light'>
        <FontAwesomeIcon icon={faUserXmark} />
      </Button>
      <Button onClick={logout}>Logout</Button>
    </ButtonToolbar>
  )
}

export default Toolbar
