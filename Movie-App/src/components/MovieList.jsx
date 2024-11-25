import { Link } from "react-router-dom";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No movies found. Try searching for something else.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
