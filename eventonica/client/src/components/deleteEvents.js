import {useState} from 'react';

const DeleteEvents = ({deleteEvent}) => {
    const [ID, setID] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        deleteEvent(ID);
        setID('');
    }
    return (
        <div style={{padding: '10px'}}>
        <h3>Delete Event</h3>
        <form id="delete-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Event ID</label>
            <input className="box" type="number" min="1" id="delete-event-id" value={ID} onChange={(e)=>{setID(e.target.value)}}/>
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    )
}

export default DeleteEvents;