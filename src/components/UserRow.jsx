import { useEffect, useState } from 'react'
import { userDelete } from '../firebase'
import Form from 'react-bootstrap/Form'

const UserRow = ({ user, checkAll, setCheckAll, deleteUser }) => {
  const { uid, name, email, lastLoginAt, createdAt, status } = user

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checkAll) setChecked(true)
    if (!checkAll) setChecked(false)
  }, [checkAll])

  useEffect(() => {
    if (deleteUser) userDelete(uid)
  })

  return (
    <>
      <tr>
        <th>
          <Form>
            <Form.Check
              checked={checked}
              onChange={(e) => setChecked(e.currentTarget.checked)}
              type='checkbox'
            />
          </Form>
        </th>
        <th>{uid}</th>
        <th>{name}</th>
        <th>{email}</th>
        <th>{lastLoginAt}</th>
        <th>{createdAt}</th>
        <th>{status}</th>
      </tr>
    </>
  )
}

export default UserRow
