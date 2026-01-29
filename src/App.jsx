import { Calculator } from "./Calculator.jsx";
import { filmData } from "./data.js";
import { Movie } from "./Movie.jsx";

function App() {
  return (
    // <div className="movie-container">
    //   {filmData.map((movie) => {
    //     return <Movie key={movie.id} movie={movie} />;
    //   })}
    // </div>
    <Calculator />
  );
}

export default App;
