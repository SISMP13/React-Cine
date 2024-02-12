import React, { useState } from "react";
import { Footer, NavBar, IndexPrincipal } from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./components/movies/MovieInfo";

const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  return (
    <Router>
      <>
        <NavBar input={input} setInput={setInput} setResults={setResults} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <IndexPrincipal results={results} setResults={setResults} />
              }
            />
            <Route path="/movie/:id" element={<MovieInfo />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
};

export default App;
