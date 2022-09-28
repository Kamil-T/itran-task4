import { ref, child, get } from 'firebase/database'
import { db } from '../firebase'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import UserRow from './UserRow'

const UserTable = () => {
  const [users, setUsers] = useState()
  const [check, setCheck] = useState()
  const [checkAll, setCheckAll] = useState(false)
  const getUsers = () => {
    get(child(ref(db), 'users/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUsers(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Form>
              <Form.Check
                checked={checkAll}
                onChange={(e) => setCheckAll(e.currentTarget.checked)}
                type='checkbox'
              />
            </Form>
          </th>
          <th>id</th>
          <th>name</th>
          <th>e-mail</th>
          <th>last login</th>
          <th>registered</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          Object.keys(users).map((key) => {
            return (
              <UserRow
                user={users[key]}
                checkAll={checkAll}
                setCheckAll={setCheckAll}
              />
            )
          })}
      </tbody>
    </Table>
  )
}

export default UserTable
