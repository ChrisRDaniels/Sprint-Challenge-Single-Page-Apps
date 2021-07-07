import React from "react";
import { NavLink } from "react-router-dom";
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

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <center>
        <NavStyled>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/character">Character List</NavLink>
        </NavStyled>
        </center>
      </header>
    </section>
  );
}
