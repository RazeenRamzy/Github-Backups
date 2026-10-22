import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:5000/api/items');
    setItems(response.data);
  };

  const addItem = async (item) => {
    await axios.post('http://localhost:5000/api/items', item);
    fetchItems();
  };

  const updateItem = async (id, updatedItem) => {
    await axios.put(`http://localhost:5000/api/items/${id}`, updatedItem);
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    fetchItems();
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <ItemForm onSubmit={addItem} />
      <ItemList items={items} onUpdate={updateItem} onDelete={deleteItem} />
    </div>
  );
}

export default App;