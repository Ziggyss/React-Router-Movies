import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from '../src/Movies/MovieList';
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
      </div>
      <Route exact path="/" component={MovieList}></Route>
      <Route 
      path="/movies/:id" 
      render={props => <Movie {...props} addToSavedList={addToSavedList}/> }>
      </Route>
    </Router>
  );
};

export default App;
