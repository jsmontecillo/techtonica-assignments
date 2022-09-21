import React, {useState, useReducer} from 'react';

const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
};
  
const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
};
  
const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
};

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
    const [events, setEvents] = useState([event1, event2, event3]);
    //const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        //events.push(state);
    }
    return (
        <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
              {events.map((item, index) => {
                return (<li key={index}>{item.name}: {item.date}</li>)
              })}
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#" onSubmit={onSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    id="add-event-name"
                    //value={state.name}
                    //onChange={(e) =>
                        //dispatch({
                          //type: 'editName',
                         //payload: e.target.value
                        //})}
                  />
                  <label>Date</label>
                  <input
                    type="text"
                    id="add-event-date"
                  />
                  <label>Description</label>
                  <input
                    type="text"
                    id="add-event-desc"
                    // value={state.description}
                    // onChange={(e) =>
                    //     dispatch({
                    //       type: 'editDescription',
                    //       payload: e.target.value
                    //     })}
                  />
                  <label>Category</label>
                  <input
                    type="text"
                    id="add-event-category"
                    // value={state.category}
                    // onChange={(e) =>
                    //     dispatch({
                    //       type: 'editCategory',
                    //       payload: e.target.value
                    //     })}
                  />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
          </section>
    );
}

export default Events;