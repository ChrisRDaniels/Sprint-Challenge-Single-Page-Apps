import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm () {

  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState("");
 
 
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const character = response.data.results;
        const results = character.includes(character.name);
        console.log("Search Results", results);
        setSearchResults(results);
      })
      .catch(error => {
        console.log("Unable to pull data", error);
      });
    }, [searchResults]);
  
  const handleChange = event => {
    setSearchName(event.target.value);
  };

  return (
    <center><section className="search-bar">
    <form>
      <label htmlFor="name">Search Character: </label>
      <input
      id="name"
      type="text"
      name="searchField"
      placeholder="Search for Character"
      value={searchName}
      onChange={handleChange}
      />
     </form>
     <div className="character-list">
        
     </div>
    </section>
    </center>
  );
}