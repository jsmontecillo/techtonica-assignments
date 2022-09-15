import "./index.css";
import { useState } from "react";
import Form from "./components/form";
import Item from "./components/item";
import Header from "./components/header";

export default function App() {
  const [items, setItems] = useState([{ text: "Having a dog" }]);

  const addItem = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <div className="App">
      <Header />
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} />
      ))}
      <Form addItem={addItem} />
    </div>
  );
}