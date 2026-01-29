export const Movie = (props) => {
  return (
    <div className="movie-wrapper">
      <img src={props.movie.affiche} alt="" />
      <div className="movie-details">
        <div className="title-wrapper">
          <h2>{props.movie.title}</h2>
          {props.movie.rating === 5 && <span>⭐</span>}
        </div>
        <h3>Director: {props.movie.director}</h3>
        <p>Year: {props.movie.year}</p>
        <p>
          {[...Array.from({ length: 5 })].map((_, index) => {
            const isFilled = index < props.movie.rating;
            return <span key={index}>{isFilled ? "★" : "☆"}</span>;
          })}
        </p>
      </div>
    </div>
  );
};
