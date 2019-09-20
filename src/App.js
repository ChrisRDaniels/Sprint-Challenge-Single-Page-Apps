import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm.js";
import CharacterList from "./components/CharacterList.js";

 function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <SearchForm />
      <CharacterList />
    </main>
  );
}

export default App;