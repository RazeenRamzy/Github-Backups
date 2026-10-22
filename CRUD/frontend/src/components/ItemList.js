import React from 'react';

function ItemList({ items, onUpdate, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.name} - {item.description}
          <button onClick={() => onUpdate(item._id, { name: item.name + ' (updated)' })}>
            Update
          </button>
          <button onClick={() => onDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;