import SearchParams from "./components/SearchParams";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </div>
  );
}

export default App;
