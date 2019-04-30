import React from "react";
import { movies } from "../data";

class Movies extends React.Component {
  displayMovies = () => {
    return movies.map(movie => {
      return (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>{movie.time}m</p>
          <ul>
            {movie.genres.map(g => (
              <li>{g}</li>
            ))}
          </ul>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {this.displayMovies()}
      </div>
    );
  }
}

export default Movies;
