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

      case 'editImage':
        return {...state, image: action.payload};
  
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
        category: '',
        image: ''
    };
    const [events, setEvents] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [searched, setSearched] = useState(false);
    const [data, setData] = useState(events);

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
      const newEvent = {id: state.id, name: state.name, date: state.date, description: state.description, category: state.category, image: state.image};
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
      let response = await fetch(`http://localhost:4000/events/${ID}`, {method: "DELETE"})
      await response.json();
      let deleteEvent = events.filter((eve) => eve.id !== Number(ID));
      setEvents(deleteEvent);
    }

    const handleSearch = async (e) => {
      e.preventDefault();
      setSearched(true);
      console.log(searched);
      let item = e.target.value;
      console.log(item);
      let result = events.filter((data) => {
        return data.category.toLowerCase().startsWith(item.toLowerCase());
      });
      setData(result);

      }


    return (
        <section className="event-management" style={{textAlign: "center"}}>
            <h2>Event Management</h2>
            <h3>All Events</h3>
            <div className="container">
              <ul id="events-list">
              {events.map((item, index) => {
                return (
                    <div className="event-card">
                      <li key={index}>
                        <div className="event-image">
                          <img src={item.image || ""} alt="event image" style={{height: "150px", borderRadius:"6px", border: "1px solid pink"}}/><br/>
                        </div>
                        <div className="event-info">
                          <span style={{color: "#4444dd", fontWeight: "bold"}}>{item.name}</span><br/> 
                          <span>{item.category}</span><br/>
                          <p>{item.description}</p>
                        </div>
                      </li>
                    </div>
                )
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
                  /><br/>
                  <label>Image</label>
                  <input
                  className="box"
                    type="text"
                    id="add-event-image"
                     value={state.image || ""}
                     onChange={(e) =>
                       dispatch({
                           type: 'editImage',
                           payload: e.target.value
                         })}
                  />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
                  
            <DeleteEvents deleteEvent={handleDelete}/>    

            <div className="search-toolbar">
  <div>
    <h3>Find Events</h3>
    <form id="search" action="#" onSubmit={handleSearch}>
      <fieldset>
        <label htmlFor="category-search">Category</label>
        <input className="box" type="text" id="category-search" onChange={handleSearch}/>
      </fieldset>
    </form>

    <div>
          <h3>Your Events</h3>
            {searched ? (data.map((item) => (<div className="event-card"><img src={item.image} alt="event" style={{height: "250px", borderRadius: "6px"}}/><br/><strong>{item.name}</strong><br/>
            {item.date}<br/>Category: {item.category}<br/>{item.description}<br/> </div>))): (<div></div>)}
            </div>
  </div>
</div>
          </section>
    );
}

export default Events;