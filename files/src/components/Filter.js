import React, { useState } from 'react';

function Filter() {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilter = () => {
    // Add your filtering logic here
    console.log('Filtering with value:', filterValue);
    // Perform filtering based on the filterValue
  };

  return (
    <div>
      <h1>Filter</h1>
      <input type="text" placeholder="Filter Value" value={filterValue} onChange={handleFilterChange} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;
