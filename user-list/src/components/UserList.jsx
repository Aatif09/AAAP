const UserList = ({ users }) => (
    <table id="usertable" border="1">
      <tr>
      <th>User Name</th>
      <th>User Mobile</th>
            <th>User Email</th>
            <th>User Age</th>
      </tr>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td> 
          <td>{user.mobile}</td>  
          <td>{user.email}</td>  
          <td>{user.age}</td>  
          
        </tr>
      ))}
    </table>
  );

  export default UserList