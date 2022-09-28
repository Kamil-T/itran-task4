import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, emailPasswordRegistration } from '../firebase'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const Registration = ({ setLogged }) => {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user] = useAuthState(auth)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    emailPasswordRegistration(name, email, password)
  }

  useEffect(() => {
    if (user) setLogged(true)
  })

  return (
    <Form noValidate validated={validated}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            required
            type='text'
            placeholder='Name'
            defaultValue=''
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationCustom02'>
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
        <Form.Group as={Col} md='4' controlId='validationCustom03'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter password'
            defaultValue=''
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default Registration
