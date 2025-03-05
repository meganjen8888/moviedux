//here's our application. it's a combination of html and js, or jsx. however, React and JSX can get used without each other.

import logo from './logo.svg';
import './App.css';
import './styles.css'
//import Header from './components/Header'
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

//this is the root.
function App() {
  return (
    //a div is put here. here we return HTML.
    <div className="App">
      
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
//how to make a new state:
/*import {useState} from "react"

export default function App() {
  const [movies, setMovies] = useState([]);
  ...
  const loadedMovies = ...;
  setMovies(loadedMovies)
  ...
  return (
    <div>{movies.length{</div>
  );
}*/