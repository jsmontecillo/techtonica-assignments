import React, {useState, useEffect} from 'react';
import DeleteUser from './deleteUser';
import profile from './profile.jpg';

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory]);
    const [values, setValues] = useState({name: "", ID: "", email: "", profile: ""});

    const getUsers = async () => {
        const response = await fetch('http://localhost:4000/users');
        const user = await response.json();
        setUsers(user);
    };

    useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getUsers();
    }, []);

    const handleInput = (e) => {
        setValues((preValues) => ({
            ...preValues,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const newUser = values;
        const rawResponse = await fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });
        const content = await rawResponse.json();
      
        setUsers([...users, content]);
        setValues({name: "", ID: "", email: "", profile: ""});
    }

    const handleDelete = async (ID) => {
        let response = await fetch(`http://localhost:4000/users/${ID}`, {method: "DELETE"})
        await response.json();
        let deleteUsers = users.filter((user) => user.id !== Number(ID));
        setUsers(deleteUsers);
    }

    return (
    <section className="user-management">
        <h2>User Management</h2>
        <ul id="users-list">
            {users.map((item, index) => {
                return (<li key={index}>
                    <img src={item.profile || profile} alt="default grey profile" className="profile-pic"/><br/> 
                    {item.id}: {item.name}
                    </li>)
            })}
        </ul>

        <div>
            <h3>Add User</h3>
            <form id="add-user" action="#" onSubmit={onSubmit}>
                <fieldset>
                    <label>Name</label>
                    <input className="box" type="text" id="add-user-name" name="name" value={values.name} onChange={handleInput}/><br/>
                    <label>ID </label>
                    <input className="box" type="text" id="add-ID" name="ID" value={values.ID} onChange={handleInput}/><br/>
                    <label>Email</label>
                    <input className="box" type="text" id="add-email" name="email" value={values.email} onChange={handleInput}/><br/>
                    <label>Profile Picture</label>
                    <input className="box" type="text" id="add-pic" name="profile" value={values.profile} onChange={handleInput}/>
                </fieldset>
                <input type="submit" value="Add" />
            </form>
        </div>
        <DeleteUser deleteUser={handleDelete}/>
    </section>
  )
};

export default Users;