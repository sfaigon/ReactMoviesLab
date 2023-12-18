import "./MovieList.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieList(props) {
  return (
    <>
      <div className="cardContainer"> 
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
      </div>
    </>
  );
}
