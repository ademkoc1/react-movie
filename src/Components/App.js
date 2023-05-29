import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";


class App extends React.Component {

  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    await this.getMovies();
  }

  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });

  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )
    this.setState({ movies: newMovieList })
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  addMovie = async (movie) => {

    await axios.post(`http://localhost:3002/movies/`, movie)
    this.setState(state => ({
      movies: state.movies.concat([movie])

    }));
    await this.getMovies();
    window.location.href = '/';
  }

  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
    await this.getMovies();
    window.location.href = '/';
  }


  render() {

    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name && movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    });

    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div>
                </div>
                <MovieList
                  movies={filteredMovies}
                  deleteMovieProp={this.deleteMovie}
                />
              </div>
            </React.Fragment>
          } />


          <Route path="/add" element={
            <AddMovie onAddMovie={(movie) => {
              this.addMovie(movie);

            }} />
          } />

          <Route path="/edit/:id" element={
            <EditMovie

              onEditMovie={(id, movie) => this.editMovie(id, movie)
              }
            />} />

        </Routes>
      </Router>
    );
  }
}

export default App;
