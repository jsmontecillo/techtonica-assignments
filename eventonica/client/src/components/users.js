import React, {useState, useEffect} from 'react';
import DeleteUser from './deleteUser';

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory]);
    const [values, setValues] = useState({name: "", ID: "", email: ""});

    const getUsers = () => {
        fetch('http://localhost:4000/users')
        .then((res) => res.json())
        .then((res) => setUsers(res.users));
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

    const onSubmit = (e) => {
        e.preventDefault();
        users.push(values);
        console.log(values, users);
        setValues({name: "", ID: "", email: ""});
    }

    const deleteUser = (deleteId) => {
        const newUsers = users.filter((i) => i.id !== deleteId);
        setUsers(newUsers);
    };

    return (
    <section className="user-management">
        <h2>User Management</h2>
        <ul id="users-list">
            {users.map((item, index) => {
                return (<li key={index}>{item.name}</li>)
            })}
        </ul>

        <div>
            <h3>Add User</h3>
            <form id="add-user" action="#" onSubmit={onSubmit}>
                <fieldset>
                    <label>Name</label>
                    <input type="text" id="add-user-name" name="name" value={values.name} onChange={handleInput}/>
                    <label>ID</label>
                    <input type="text" id="add-ID" name="ID" value={values.ID} onChange={handleInput}/>
                    <label>Email</label>
                    <input type="text" id="add-email" name="email" value={values.email} onChange={handleInput}/>
                </fieldset>
                <input type="submit" value="Add" />
            </form>
        </div>

        <DeleteUser delete={deleteUser}/>
    </section>
  )
};

export default Users;