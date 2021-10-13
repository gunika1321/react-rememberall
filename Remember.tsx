import React, { useState } from 'react';
import './remember.css';

function Remember() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState([]);
  const handleClick = (mouseClick) => {
    mouseClick.preventDefault();
    setList([...list, { value }]);
    console.log(list);
    setValue('');
  };
  const deleteMemory = () => {
    setList([]);
  };
  return (
    <div className="main">
      {list.length > 0 ? (
        <h1>You have something to remember</h1>
      ) : (
        <h1>Nothing to remember</h1>
      )}
      <form>
        <input
          type="text"
          placeholder="Store something..."
          value={value}
          onChange={(keyboardStroke) => setValue(keyboardStroke.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Store in memory
        </button>
      </form>
      <button type="submit" onClick={deleteMemory} className="clear">
        Clear memory
      </button>
    </div>
  );
}

export default Remember;
