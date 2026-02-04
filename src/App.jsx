import { Calculator } from "./Calculator.jsx";
import { filmData } from "./data.js";
import { Movie } from "./Movie.jsx";
import { Project } from "./Project.jsx";

function App() {
  return (
    // <div className="movie-container">
    //   {filmData.map((movie) => {
    //     return <Movie key={movie.id} movie={movie} />;
    //   })}
    // </div>
    // <Calculator />
    <Project />
  );
}

export default App;
