import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faUserXmark } from '@fortawesome/free-solid-svg-icons'

const Toolbar = () => {
  return (
    <ButtonToolbar>
      <Button variant='danger'>Block</Button>
      <Button variant='light'>
        <FontAwesomeIcon icon={faUnlock} />
      </Button>
      <Button variant='light'>
        <FontAwesomeIcon icon={faUserXmark} />
      </Button>
    </ButtonToolbar>
  )
}

export default Toolbar
