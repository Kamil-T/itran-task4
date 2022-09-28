import { useState } from 'react'
import UserTable from './UserTable'
import Toolbar from './Toolbar'
const Dashboard = ({ setLogged }) => {
  const [deleteUser, setDeleteUser] = useState(false)
  return (
    <>
      <Toolbar setLogged={setLogged} setDeleteUser={setDeleteUser} />
      <UserTable deleteUser={deleteUser} />
    </>
  )
}

export default Dashboard
