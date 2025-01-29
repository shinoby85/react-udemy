import {useState} from "react";

export default function SearchableList({items}) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(evt) {
    setSearchTerm(evt.target.value);
  }

  const searchResult = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleInputChange}/>
      <ul>
        {searchResult.map((item, index) => (<li key={index}>{item.toString()}</li>))}
      </ul>
    </div>
  );
};