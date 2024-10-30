import React, { useState, useTransition } from 'react';

import names from '../data.json';

export default function Data() {

  const [ query, setQuery ] = useState('');
  const [inputValue, setInputValue] = useState("");

  const [ isPending, startTrasition ] = useTransition();

  const handleChange = (value) => {
    setInputValue(value);
    startTrasition(() => setQuery(value));
  }

  const filteredNames = names.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  })

  return (
      <div>
          <input
              type="text"
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
          />
          {
            isPending && <p>Updating List</p>
          }
          {filteredNames.map((name) => (
              <div key={name.id}>
                  <ul>
                      <li>
                          {name.first_name} {name.last_name}
                      </li>
                  </ul>
              </div>
          ))}
      </div>
  );
}
