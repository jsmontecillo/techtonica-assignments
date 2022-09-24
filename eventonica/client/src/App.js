import Footer from "./components/footer";
import Users from "./components/users";
import Events from "./components/events";
import Header from "./components/header";
import "./App.css";
import styled from 'styled-components';
import {useState} from 'react';

const Tab = styled.button`
  width: 100%;
  font-size: 20px;
  font-family: Courier New;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #4444dd;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Users', 'Events', 'Contact Us'];
const typeTags = [<div className="users"><Users /></div>, <div className="events"><Events /></div>,       <main>
  <div style={{textAlign: "center"}}>
    <h3>Any Questions?</h3>
    <form id="search" action="#">
      <fieldset>
        <label htmlFor="category-search">Name</label>
        <input className="box" type="text" id="category-search" /><br/>
        <label htmlFor="category-search">Email</label>
        <input className="box" type="text" id="category-search" /><br/>
        <label htmlFor="category-search">Questions</label>
        <input className="box" type="text" id="category-search" /><br/>
      </fieldset>

      <input type="submit" value="Search" />
    </form>
  </div>


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
      <div style={{marginTop: "0px"}}> {data} </div>

      <Footer />
    </div>
  );
}

export default App;
