import SearchParams from "./components/SearchParams";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import { useState } from "react";
import AdoptedPetContext from "./Context/AdoptedPetContext";
function App() {
  const adoptedPet = useState(null);
  return (
    <div className="App">
      <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </AdoptedPetContext.Provider>
    </div>
  );
}

export default App;
