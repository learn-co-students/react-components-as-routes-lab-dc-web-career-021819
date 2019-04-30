import React from "react";
import { directors } from "../data";

class Directors extends React.Component {
  displayDirectors = () => {
    return (
      <ul>
        {directors.map(director => {
          return (
            <li key={director.name}>
              <div>
                <h3>{director.name}</h3>
                <ul>
                  {director.movies.map(movie => {
                    return <li key={movie}>{movie}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {this.displayDirectors()}
      </div>
    );
  }
}

export default Directors;
