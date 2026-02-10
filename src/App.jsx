import { Calculator } from "./Calculator.jsx";
import { filmData } from "./data.js";
import { Movie } from "./Movie.jsx";
import { Project } from "./Project.jsx";
import { Radio } from "./Radio.jsx";

function App() {
  return (
    // <div className="movie-container">
    //   {filmData.map((movie) => {
    //     return <Movie key={movie.id} movie={movie} />;
    //   })}
    // </div>
    // <Calculator />
    // <Project />
    <Radio />
  );
}

export default App;
