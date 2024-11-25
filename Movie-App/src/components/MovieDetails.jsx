import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=e4de40bf`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Release Year:</strong> {movie.Year}
      </p>
    </div>
  );
}

export default MovieDetail;
