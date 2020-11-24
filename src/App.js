import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }, //=== movies.data.data.movies
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              ></Movie>
            ))}
      </div>
    );
  }
}

export default App;
