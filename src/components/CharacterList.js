import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  padding: 10px;
  width: 200px;
  border: 1px solid lightgrey;
  font-family: 'Lacquer', sans-serif;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const character = response.data.results;
        console.log("Characters", character);
        setCharacter(character);

      })
      // Catching errors
      .catch(error => {
        console.log("Data could not be fetched", error);
      });
    
  }, []);

  return (
    <section className="character-list">
       <center>
       <NavStyled>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/character">Character List</NavLink>
      </NavStyled> 
       </center>

      <h2>{character.map(person => {
        return <CharacterCard key={person.id} name={person.name} species={person.species} status={person.status} origin={person.origin} image={person.image} />
      })}</h2>
    </section>
  );
}