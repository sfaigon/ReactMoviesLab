import { Link } from "react-router-dom";
import "./MovieCard.css";
export default function MovieCard(props) {
    return (
        <>
        <div>
             <Link to={`/movies/${props.movie.title}`} className="movie-link">
             <img src={props.movie.posterPath} alt="Movie Picture" />
             <div>
             <h2>{props.movie.title}</h2>
             <p>Release Date: {props.movie.releaseDate} </p>
             </div>
             </Link>
        </div>
        </>
    )
}