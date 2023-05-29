import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditMovie = ({ onEditMovie }) => {const [movie, setMovie] = useState({
    name: "",
    rating: "",
    overview: "",
    imageURL: ""
});

const { id } = useParams();


useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        const data = response.data;
        setMovie({
            name: data.name,
            rating: data.rating,
            overview: data.overview,
            imageURL: data.imageURL
        });
    };
    fetchData();
}, [id]);

const onInputChange = (e) => {
    setMovie({
        ...movie,
        [e.target.name]: e.target.value
    });
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = { ...movie };
    onEditMovie(id, updatedMovie);
   
}

return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <h3 className="mb-4">Add a Movie</h3>
        <div className="form-group">
          <input   value={movie.name}
                        onChange={onInputChange} type="text" className="form-control form-control-lg" placeholder="Movie Name" name="name" required />
        </div>
        <div className="form-group">
          <input value={movie.rating}
                        onChange={onInputChange} type="text" className="form-control form-control-lg" placeholder="Movie Rating" name="rating" required />
        </div>
        <div className="form-group">
          <input value={movie.imageURL}
                        onChange={onInputChange} type="text" className="form-control form-control-lg" placeholder="Image URL" name="imageURL" required />
        </div>
        <div className="form-group">
          <textarea value={movie.overview}
                        onChange={onInputChange} className="form-control form-control-lg" placeholder="Overview" name="overview" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">Add Movie</button>
      </form>
    </div>
)
}

export default EditMovie;