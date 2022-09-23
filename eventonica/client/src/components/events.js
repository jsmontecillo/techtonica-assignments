import React, {useState, useReducer, useEffect} from 'react';
import DeleteEvents from './deleteEvents';

const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
      case 'editName':
        console.log('Logged if the editName action is being dispatched');
        return { ...state, name: action.payload };
  
      case 'editDescription':
        return { ...state, description: action.payload };
  
      case 'editCategory':
        return { ...state, category: action.payload };

      case 'editDate':
        return { ...state, date: action.payload };

        case 'editID':
          return { ...state, id: action.payload };
  
      default:
        return state;
    }
};


const Events = () => {
    const initialState = {
        id: '',
        name: '',
        date: null,
        description: '',
        category: ''
    };
    const [events, setEvents] = useState([]);
    const [searchedData, setSearchedData] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const getEvents = async () => {
      const response = await fetch('http://localhost:4000/events');
      const event = await response.json();
      setEvents(event);
  };
  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getEvents();
    }, []);

    const onSubmit = async (e) => {
      e.preventDefault();
      const newEvent = {id: state.id, name: state.name, date: state.date, description: state.description, category: state.category};
      const response = await fetch('http://localhost:4000/events', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newEvent)
      });
      const content = await response.json();
      setEvents([...events, content]);
    }

    const handleDelete = async (ID) => {
      let response = await fetch(`http://localhost:4000/users/${ID}`, {method: "DELETE"})
      await response.json();
      let deleteEvent = events.filter((eve) => eve.id !== Number(ID));
      setEvents(deleteEvent);
    }

    return (
        <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
              {events.map((item, index) => {
                return (<div>
                  <li key={index}>{item.name}: {item.date}</li>
                  </div>)
              })}
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#" onSubmit={onSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input
                  className="box"
                    type="text"
                    id="add-event-name"
                    value={state.name || ""}
                    onChange={(e) =>
                        dispatch({
                          type: 'editName',
                          payload: e.target.value
                        })}
                  /><br/>
                  <label>Date</label>
                  <input
                  className="box"
                    type="text"
                    id="add-event-date"
                    value={state.date || ""}
                      onChange={(e) =>
                         dispatch({
                           type: 'editDate',
                           payload: e.target.value
                         })}
                  /><br/>
                  <label>Description</label>
                  <input
                  className="box"
                    type="text"
                    id="add-event-desc"
                    value={state.description || ""}
                     onChange={(e) =>
                         dispatch({
                           type: 'editDescription',
                           payload: e.target.value
                         })}
                  /><br/>
                  <label>Category</label>
                  <input
                  className="box"
                    type="text"
                    id="add-event-category"
                     value={state.category || ""}
                     onChange={(e) =>
                       dispatch({
                           type: 'editCategory',
                           payload: e.target.value
                         })}
                  />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
                  
            <DeleteEvents deleteEvent={handleDelete}/>    
          </section>
    );
}

export default Events;