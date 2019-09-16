import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from '../src/Movies/MovieList';
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <Route exact path="/" component={MovieList}></Route>
      <Route></Route>
    </Router>
  );
};

export default App;
