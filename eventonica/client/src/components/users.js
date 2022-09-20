import React, {useState, useEffect} from 'react';

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };



const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory]);
    console.log('users', users);

const getUsers = () => {
  fetch('http://localhost:4000/users')
    .then((res) => res.json())
    .then((res) => setUsers(res.users));
};

useEffect(() => {
  // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  getUsers();
}, []);
  return (
  <section className="user-management">
    <h2>User Management</h2>
    <ul id="users-list">
        {users.map((item, index) => {
            <li key={index}>{item.name}</li>
        })}
        <li>...</li>
    </ul>

    <div>
        <h3>Add User</h3>
        <form id="add-user" action="#">
            <fieldset>
                <label>Name</label>
                <input type="text" id="add-user-name" />
            </fieldset>
            {/* Add more form fields here */}
            <input type="submit" value="Add" />
        </form>
    </div>

    <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#">
            <fieldset>
                <label>User ID</label>
                <input type="text" id="delete-user-id" />
             </fieldset>
            <input type="submit" />
        </form>
    </div>
  </section>
  )
};

export default Users;