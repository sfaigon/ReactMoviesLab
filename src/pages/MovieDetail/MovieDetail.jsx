import { useParams } from "react-router-dom";
import "./MovieDetail.css";
export default function MovieDetail({movies}) {

  let { movieName } = useParams();
  let movie = movies.find(movie => movie.title === movieName)
  return (
    <>
      <img src={movie.posterPath} alt="Movie image" />
      <h2>{movie.title}</h2>
      <p>Release Date:{movie.releaseDate} </p>
      
        {
          movie.cast.map(actor => {
            return <p>{actor}</p>
          })
        }
    
    </>
  );
}
