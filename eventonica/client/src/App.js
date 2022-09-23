import Footer from "./components/footer";
import Users from "./components/users";
import Events from "./components/events";
import Header from "./components/header";
import "./App.css";
import styled from 'styled-components';
import {useState} from 'react';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Users', 'Events', 'Event Search'];
const typeTags = [<div className="users"><Users /></div>, <div className="events"><Events /></div>,       <main>

<aside className="search-toolbar">
  <div>
    <h3>Find Events</h3>
    <form id="search" action="#">
      <fieldset>
        <label htmlFor="date-search">Date</label>
        <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
      </fieldset>
      <fieldset>
        <label htmlFor="category-search">Category</label>
        <input type="text" id="category-search" />
      </fieldset>

      <input type="submit" value="Search" />
    </form>
  </div>
</aside>

</main>];

function App() {
  const [active, setActive] = useState(types[0]);
  const [data, setData] = useState("");
  return (
    <div className="App">
      <Header />
      <ButtonGroup>
        {types.map((type, index) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => {setActive(type); setData(typeTags[index])}}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p> {data} </p>

      <Footer />
    </div>
  );
}

export default App;
