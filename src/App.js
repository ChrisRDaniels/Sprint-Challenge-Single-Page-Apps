import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm.js";
import CharacterList from "./components/CharacterList.js";

 function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path ="/character/" component={CharacterList} />
      <SearchForm />
    </main>
  );
}

export default App;