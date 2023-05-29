import React from "react";
import '../Css/SearcBar.css'
import { Link } from "react-router-dom";

class SearchBar extends React.Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
}

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            <div className="search-container">
              <input
              onChange={this.props.searchMovieProp}
              type="text" className="form-control" placeholder="Search a movie" />
              <div>
                <Link
                      to="/add"
                      type="button" 
                      className="btn btn-primary"
                      >Add Movie  
                </Link>
              </div> 
             
              
            </div>
          </form>
          
          




        )
    }
}

export default SearchBar;