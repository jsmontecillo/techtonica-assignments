import {useState} from 'react';

const DeleteUser = ({deleteUser}) => {
    const [ID, setID] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        deleteUser(ID);
        setID('');
    }
    return (
        <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#" onSubmit={handleSubmit}>
            <fieldset>
                <label>User ID</label>
                <input className="box" type="number" id="delete-user-id" value={ID} onChange={(e)=>{setID(e.target.value)}}/>
             </fieldset>
            <input type="submit" />
        </form>
    </div>
    )
}

export default DeleteUser;