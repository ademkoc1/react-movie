import React from 'react';
import '../Css/AddMovie.css'
import serialize from 'form-serialize';

class AddMovie extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        //console.log(newMovie);
        this.props.onAddMovie(newMovie);
    }

    render() {

  return (
    <div className="container">
      <form className="mt-5" onSubmit={this.handleFormSubmit}>
        <h3 className="mb-4">Add a Movie</h3>
        <div className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Movie Name" name="name" required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Movie Rating" name="rating" required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Image URL" name="imageURL" required />
        </div>
        <div className="form-group">
          <textarea className="form-control form-control-lg" placeholder="Overview" name="overview" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">Add Movie</button>
      </form>
    </div>
  );
    }
}

export default AddMovie;
