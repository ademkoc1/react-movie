import React from "react";
import '../Css/MovieList.css'
import { Link } from "react-router-dom";

const MovieList = (props) => {

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
    }

    

    return (
        <div className="row">
             {props.movies.map((movie,i) => (
                
            <div className="col-lg-3" key={i}>
                <div className="card mb-4 shadow-sm">
                    <div className="card-img-container">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="overlay">
                            <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-outline-danger">Delete</button>
                            <div>
                                <Link type="button"
                                className="btn btn-md btn-outline-primary"
                                to={`edit/${movie.id}`}>
                                    Edit
                                </Link>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{movie.name} </h5>
                        <p className="card-text">{truncateOverview(movie.overview, 100)} </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2><span className="badge bg-warning">{movie.rating} </span></h2>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>

    )

}

export default MovieList;