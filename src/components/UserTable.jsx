import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

const UserTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Form>
              <Form.Check type='checkbox' />
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
      <tbody></tbody>
    </Table>
  )
}

export default UserTable
