import React from "react";
import { actors } from "../data";

class Actors extends React.Component {
  displayActors = () => {
    return actors.map(actor => {
      return (
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(movie => {
              return <li>{movie}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Actors Page</h1>
        {this.displayActors()}
      </div>
    );
  }
}

export default Actors;
