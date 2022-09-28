import { useState, useEffect } from 'react'
import { db, auth, emailPasswordLogIn } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { ref, update } from 'firebase/database'

const Login = ({ setLogged }) => {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user] = useAuthState(auth)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    emailPasswordLogIn(email, password)
  }

  const lastLoginUpdate = () => {
    update(ref(db, 'users/' + user.uid), {
      lastLoginAt: user.metadata.lastLoginAt,
    })
  }

  useEffect(() => {
    if (user) {
      setLogged(true)
      lastLoginUpdate()
    }
    console.log(user)
  })

  return (
    <Form noValidate validated={validated}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <Form.Label>E-mail address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            placeholder='Enter email'
            defaultValue=''
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationCustom02'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            placeholder='Enter password'
            defaultValue=''
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button onClick={handleSubmit}>Login</Button>
    </Form>
  )
}

export default Login
