import {useState} from 'react';

const DeleteUser = (props) => {
    const [ID, setID] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.delete(ID);
        setID("");
    }
    return (
        <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#" onSubmit={handleSubmit}>
            <fieldset>
                <label>User ID</label>
                <input type="text" id="delete-user-id" value={ID} onChange={(e)=>{setID(e.target.value)}}/>
             </fieldset>
            <input type="submit" />
        </form>
    </div>
    )
}

export default DeleteUser;